/**
 * Core Data Provider Architecture
 * 
 * This module provides a centralized, type-safe data access layer with:
 * - Proper error handling and fallback mechanisms
 * - Caching strategy for performance
 * - Separation of concerns between API calls and data transformation
 * - Extensible provider pattern for different data sources
 */

import { cache } from "react";

/**
 * Result type for operations that can fail
 */
export type DataResult<T> = 
  | { success: true; data: T; source: 'api' | 'cache' | 'fallback' }
  | { success: false; error: Error; fallback?: T };

/**
 * Options for data fetching
 */
export interface FetchOptions {
  /** Force refresh from API, bypassing cache */
  forceRefresh?: boolean;
  /** Timeout in milliseconds */
  timeout?: number;
  /** Use fallback data if API fails */
  useFallback?: boolean;
  /** Cache TTL in seconds */
  cacheTTL?: number;
}

/**
 * Cache entry with metadata
 */
interface CacheEntry<T> {
  data: T;
  timestamp: number;
  ttl: number;
}

/**
 * In-memory cache with TTL support
 */
class DataCache {
  private cache = new Map<string, CacheEntry<unknown>>();
  private stats = {
    hits: 0,
    misses: 0,
    sets: 0,
  };

  get<T>(key: string): T | null {
    const entry = this.cache.get(key);
    
    if (!entry) {
      this.stats.misses++;
      return null;
    }

    // Check if expired
    if (Date.now() - entry.timestamp > entry.ttl * 1000) {
      this.cache.delete(key);
      this.stats.misses++;
      return null;
    }

    this.stats.hits++;
    return entry.data as T;
  }

  set<T>(key: string, data: T, ttl: number = 300): void {
    this.cache.set(key, {
      data,
      timestamp: Date.now(),
      ttl,
    });
    this.stats.sets++;
  }

  invalidate(key: string): void {
    this.cache.delete(key);
  }

  invalidatePattern(pattern: RegExp): void {
    for (const key of this.cache.keys()) {
      if (pattern.test(key)) {
        this.cache.delete(key);
      }
    }
  }

  clear(): void {
    this.cache.clear();
  }

  getStats() {
    return {
      ...this.stats,
      size: this.cache.size,
      hitRate: this.stats.hits / (this.stats.hits + this.stats.misses) || 0,
    };
  }
}

// Global cache instance
export const dataCache = new DataCache();

/**
 * Base provider class for all data sources
 */
export abstract class DataProvider<T> {
  protected abstract name: string;
  protected defaultCacheTTL = 300; // 5 minutes

  /**
   * Fetch data with error handling and caching
   */
  async fetch(options: FetchOptions = {}): Promise<DataResult<T>> {
    const {
      forceRefresh = false,
      timeout = 10000,
      useFallback = true,
      cacheTTL = this.defaultCacheTTL,
    } = options;

    const cacheKey = this.getCacheKey();

    // Check cache first
    if (!forceRefresh) {
      const cached = dataCache.get<T>(cacheKey);
      if (cached !== null) {
        return { success: true, data: cached, source: 'cache' };
      }
    }

    // Fetch from API
    try {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), timeout);

      const data = await this.fetchFromSource(controller.signal);
      clearTimeout(timeoutId);

      // Cache the result
      dataCache.set(cacheKey, data, cacheTTL);

      return { success: true, data, source: 'api' };
    } catch (error) {
      console.error(`[${this.name}] Fetch error:`, error);

      // Try fallback
      if (useFallback) {
        const fallback = await this.getFallback();
        if (fallback) {
          return { success: true, data: fallback, source: 'fallback' };
        }
      }

      return {
        success: false,
        error: error instanceof Error ? error : new Error(String(error)),
      };
    }
  }

  /**
   * Get cache key for this provider
   */
  protected getCacheKey(): string {
    return `${this.name}:default`;
  }

  /**
   * Fetch data from the actual source
   */
  protected abstract fetchFromSource(signal?: AbortSignal): Promise<T>;

  /**
   * Get fallback data if API fails
   */
  protected abstract getFallback(): Promise<T | null>;

  /**
   * Invalidate cache for this provider
   */
  invalidateCache(): void {
    dataCache.invalidate(this.getCacheKey());
  }
}

/**
 * Batched data provider for efficient parallel fetching
 */
export class BatchedDataProvider {
  private pending = new Map<string, Promise<unknown>>();

  /**
   * Fetch multiple items in parallel with deduplication
   */
  async fetchBatch<T>(
    items: Array<{ key: string; fetcher: () => Promise<T> }>
  ): Promise<Map<string, DataResult<T>>> {
    const results = new Map<string, DataResult<T>>();

    // Deduplicate requests
    const uniqueItems = new Map<string, () => Promise<T>>();
    for (const item of items) {
      if (!uniqueItems.has(item.key)) {
        uniqueItems.set(item.key, item.fetcher);
      }
    }

    // Fetch in parallel
    const promises = Array.from(uniqueItems.entries()).map(async ([key, fetcher]) => {
      // Check if already pending
      let promise = this.pending.get(key);
      
      if (!promise) {
        promise = fetcher();
        this.pending.set(key, promise);
      }

      try {
        const data = await promise;
        results.set(key, { success: true, data: data as T, source: 'api' });
      } catch (error) {
        results.set(key, {
          success: false,
          error: error instanceof Error ? error : new Error(String(error)),
        });
      } finally {
        this.pending.delete(key);
      }
    });

    await Promise.allSettled(promises);
    return results;
  }

  /**
   * Clear all pending requests
   */
  clearPending(): void {
    this.pending.clear();
  }
}

// Global batched provider instance
export const batchedProvider = new BatchedDataProvider();

/**
 * Utility: Create a cached data fetcher
 */
export function createCachedFetcher<T>(
  name: string,
  fetcher: () => Promise<T>,
  options: { ttl?: number; fallback?: () => Promise<T | null> } = {}
) {
  return cache(async (opts: FetchOptions = {}): Promise<DataResult<T>> => {
    const { ttl = 300, fallback } = options;
    const cacheKey = `${name}:cached`;
    const { forceRefresh = false, timeout = 10000 } = opts;

    // Check cache
    if (!forceRefresh) {
      const cached = dataCache.get<T>(cacheKey);
      if (cached !== null) {
        return { success: true, data: cached, source: 'cache' };
      }
    }

    // Fetch with timeout
    try {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), timeout);

      const data = await fetcher();
      clearTimeout(timeoutId);

      dataCache.set(cacheKey, data, ttl);
      return { success: true, data, source: 'api' };
    } catch (error) {
      console.error(`[${name}] Fetch error:`, error);

      // Try fallback
      if (fallback) {
        const fallbackData = await fallback();
        if (fallbackData) {
          return { success: true, data: fallbackData, source: 'fallback' };
        }
      }

      return {
        success: false,
        error: error instanceof Error ? error : new Error(String(error)),
      };
    }
  });
}

/**
 * Utility: Unwrap DataResult or throw
 */
export function unwrapResult<T>(result: DataResult<T>): T {
  if (!result.success) {
    throw result.error;
  }
  return result.data;
}

/**
 * Utility: Get data from result with fallback
 */
export function getDataOrFallback<T>(result: DataResult<T>, fallback: T): T {
  if (result.success) {
    return result.data;
  }
  return result.fallback ?? fallback;
}
