/**
 * Supabase Client Configuration
 * 
 * NOTE: @supabase/supabase-js package not yet installed
 * Run: npm install @supabase/supabase-js
 * Then uncomment the import and client creation below
 */

// import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';

// Placeholder until package is installed
export const supabase: any = null;

/*
export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    persistSession: false, // No user auth needed for this app
  },
});
*/

// Database types
export interface Bill {
  id: string;
  bill_id: string;
  congress: number;
  bill_type: string;
  bill_number: number;
  title: string;
  summary?: string;
  sponsor_name?: string;
  sponsor_party?: string;
  sponsor_state?: string;
  introduced_date?: string;
  latest_action?: string;
  status?: string;
  full_text?: string;
  created_at: string;
  updated_at: string;
  cache_expires_at: string;
}

export interface BillAnalysis {
  id: string;
  bill_id: string;
  summary: string;
  key_provisions: string[];
  american_score: {
    benefitScope: number;
    foreignImpact: number;
    transparency: number;
    overall: number;
  };
  infrastructure_relevance: number;
  domestic_focus: number;
  estimated_cost: string;
  infrastructure_provisions?: {
    highways: string[];
    water: string[];
    energy: string[];
    broadband: string[];
    other: string[];
  };
  analyzed_at: string;
  analysis_model: string;
}

export interface VotingRecord {
  id: string;
  bioguide_id: string;
  member_name: string;
  party: string;
  state?: string;
  chamber: 'house' | 'senate';
  congress: number;
  roll_call_number: number;
  vote_date: string;
  vote_position: 'Yea' | 'Nay' | 'Not Voting' | 'Present';
  bill_id?: string;
  vote_question?: string;
  vote_result?: string;
  bill_american_score?: number;
  created_at: string;
}

export interface LeaderScore {
  id: string;
  bioguide_id: string;
  member_name: string;
  party: string;
  state?: string;
  chamber?: string;
  total_votes: number;
  avg_american_score: number;
  infrastructure_votes: number;
  infrastructure_avg_score: number;
  last_updated: string;
}

export interface APICache {
  id: string;
  cache_key: string;
  api_name: 'congress' | 'bls' | 'eia' | 'census' | 'fred';
  endpoint: string;
  response_data: unknown;
  created_at: string;
  expires_at: string;
}

// Helper functions

/**
 * Get bill from cache or return null
 */
export async function getCachedBill(billId: string): Promise<Bill | null> {
  const { data, error } = await supabase
    .from('bills')
    .select('*')
    .eq('bill_id', billId)
    .gt('cache_expires_at', new Date().toISOString())
    .single();

  if (error || !data) return null;
  return data as Bill;
}

/**
 * Cache bill data
 */
export async function cacheBill(bill: Omit<Bill, 'id' | 'created_at' | 'updated_at' | 'cache_expires_at'>) {
  const { data, error } = await supabase
    .from('bills')
    .upsert({
      ...bill,
      cache_expires_at: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString() // 7 days
    }, {
      onConflict: 'bill_id'
    })
    .select()
    .single();

  if (error) throw error;
  return data as Bill;
}

/**
 * Get bill analysis from cache
 */
export async function getCachedBillAnalysis(billId: string): Promise<BillAnalysis | null> {
  const { data, error } = await supabase
    .from('bill_analysis')
    .select('*')
    .eq('bill_id', billId)
    .single();

  if (error || !data) return null;
  return data as BillAnalysis;
}

/**
 * Cache bill analysis
 */
export async function cacheBillAnalysis(analysis: Omit<BillAnalysis, 'id' | 'analyzed_at'>) {
  const { data, error } = await supabase
    .from('bill_analysis')
    .upsert(analysis, {
      onConflict: 'bill_id'
    })
    .select()
    .single();

  if (error) throw error;
  return data as BillAnalysis;
}

/**
 * Get voting records for a member
 */
export async function getVotingRecords(bioguideId: string, congress?: number): Promise<VotingRecord[]> {
  let query = supabase
    .from('voting_records')
    .select('*')
    .eq('bioguide_id', bioguideId)
    .order('vote_date', { ascending: false });

  if (congress) {
    query = query.eq('congress', congress);
  }

  const { data, error } = await query;

  if (error) throw error;
  return (data as VotingRecord[]) || [];
}

/**
 * Cache voting record
 */
export async function cacheVotingRecord(record: Omit<VotingRecord, 'id' | 'created_at'>) {
  const { data, error } = await supabase
    .from('voting_records')
    .upsert(record, {
      onConflict: 'bioguide_id,congress,roll_call_number'
    })
    .select()
    .single();

  if (error) throw error;
  return data as VotingRecord;
}

/**
 * Get leader score
 */
export async function getLeaderScore(bioguideId: string): Promise<LeaderScore | null> {
  const { data, error } = await supabase
    .from('leader_scores')
    .select('*')
    .eq('bioguide_id', bioguideId)
    .single();

  if (error || !data) return null;
  return data as LeaderScore;
}

/**
 * Update leader score
 */
export async function updateLeaderScore(score: Omit<LeaderScore, 'id' | 'last_updated'>) {
  const { data, error } = await supabase
    .from('leader_scores')
    .upsert(score, {
      onConflict: 'bioguide_id'
    })
    .select()
    .single();

  if (error) throw error;
  return data as LeaderScore;
}

/**
 * Generic API response caching
 */
export async function getCachedAPIResponse<T>(cacheKey: string): Promise<T | null> {
  const { data, error } = await supabase
    .from('api_cache')
    .select('response_data')
    .eq('cache_key', cacheKey)
    .gt('expires_at', new Date().toISOString())
    .single();

  if (error || !data) return null;
  return data.response_data as T;
}

/**
 * Cache API response
 */
export async function cacheAPIResponse(
  cacheKey: string,
  apiName: APICache['api_name'],
  endpoint: string,
  responseData: unknown,
  expiresInSeconds: number = 3600
) {
  const { data, error } = await supabase
    .from('api_cache')
    .upsert({
      cache_key: cacheKey,
      api_name: apiName,
      endpoint,
      response_data: responseData,
      expires_at: new Date(Date.now() + expiresInSeconds * 1000).toISOString()
    }, {
      onConflict: 'cache_key'
    })
    .select()
    .single();

  if (error) throw error;
  return data as APICache;
}
