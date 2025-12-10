/**
 * API Client Index
 * Central export for all external API clients
 */

export { CongressAPI, congressAPI } from './propublica';
export { GovTrackAPI, govtrackAPI } from './govtrack';
export { USASpendingAPI, usaspendingAPI } from './usaspending';
export { FREDAPI, fredAPI } from './fred';
export { OpenSecretsAPI, opensecretsAPI } from './opensecrets';
export { BLSAPI, blsAPI, BLS_SERIES } from './bls';
export { EIAAPI, eiaAPI, EIA_SERIES } from './eia';
export { CensusAPI, censusAPI, CENSUS_SERIES } from './census';
export { DeepSeekAPI, deepseekAPI } from './deepseek';

// Congress voting data helpers
export { 
  fetchMemberVotingRecord, 
  fetchRecentHouseVotes, 
  getMemberVoteOnRollCall 
} from './congress-voting';

/**
 * API Key Setup Instructions:
 * 
 * 1. Congress.gov API ✅
 *    - Get key: https://api.data.gov/signup/
 *    - Add to .env: CONGRESS_API_KEY=your_key_here
 * 
 * 2. FRED (Federal Reserve)
 *    - Get key: https://fred.stlouisfed.org/docs/api/api_key.html
 *    - Add to .env: FRED_API_KEY=your_key_here
 * 
 * 3. OpenSecrets
 *    - Get key: https://www.opensecrets.org/api/admin/index.php?function=signup
 *    - Add to .env: OPENSECRETS_API_KEY=your_key_here
 * 
 * 4. Bureau of Labor Statistics (BLS) ✅
 *    - Get key: https://www.bls.gov/developers/
 *    - Add to .env: BLS_API_KEY=your_key_here
 * 
 * 5. Energy Information Administration (EIA) ✅
 *    - Get key: https://www.eia.gov/opendata/register.php
 *    - Add to .env: EIA_API_KEY=your_key_here
 * 
 * 6. U.S. Census Bureau ✅
 *    - Get key: https://api.census.gov/data/key_signup.html
 *    - Add to .env: CENSUS_API_KEY=your_key_here
 * 
 * 7. DeepSeek (Low-cost AI inference)
 *    - Get key: https://platform.deepseek.com/
 *    - Add to .env: DEEPSEEK_API_KEY=your_key_here
 *    - Cost: ~$0.14/million tokens (90%+ cheaper than OpenAI)
 * 
 * 8. GovTrack - No API key required
 * 9. USAspending.gov - No API key required
 */

/**
 * Rate Limits:
 * - Congress.gov: 1,000 requests/hour (api.data.gov tier)
 * - GovTrack: ~1,000 requests/hour (soft limit, no hard enforcement)
 * - USAspending.gov: No published limit
 * - FRED: 120 requests/minute
 * - OpenSecrets: 200 requests/day
 * - BLS: 500 requests/day (registered), 50 series per query
 * - EIA: No published limit (be respectful)
 * - Census: No published limit (be respectful)
 * - DeepSeek: No published limit (very generous, cost-based)
 */

/**
 * Caching Strategy:
 * All API clients use Next.js fetch with revalidation:
 * - Leadership/voting data: 1 hour (3600s)
 * - Financial data: 24 hours (86400s)
 * - Historical data: 24 hours (86400s)
 */
