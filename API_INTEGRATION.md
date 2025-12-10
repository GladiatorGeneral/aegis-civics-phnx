# API Integration Guide

## Priority APIs Implemented

All four priority API clients are now available in `lib/api/`:

### 1. **ProPublica Congress API** (`lib/api/propublica.ts`)
- **Purpose:** Real voting records, bill sponsorships, committee assignments
- **Key Required:** Yes - [Get API key](https://www.propublica.org/datastore/api/propublica-congress-api)
- **Rate Limit:** 5,000 requests/day
- **Methods:**
  - `getMembers(congress, chamber)` - Get all members of Senate/House
  - `getMemberVotes(memberId)` - Get voting record for a member
  - `getMemberBills(memberId)` - Get bills sponsored by a member
  - `getBillDetails(congress, billId)` - Get specific bill details

### 2. **GovTrack API** (`lib/api/govtrack.ts`)
- **Purpose:** Detailed bill tracking, cosponsorship networks, voting patterns
- **Key Required:** No - Free public access
- **Rate Limit:** ~1,000 requests/hour (soft limit)
- **Methods:**
  - `searchPeople(params)` - Search members by name, state, role
  - `searchBills(params)` - Search bills by sponsor, status, keywords
  - `getPersonVotes(personId)` - Get all votes cast by a person
  - `getBillCosponsors(billId)` - Get bill cosponsorship network

### 3. **USAspending.gov API** (`lib/api/usaspending.ts`)
- **Purpose:** Real-time federal infrastructure spending, domestic vs foreign breakdown
- **Key Required:** No - Free public access
- **Rate Limit:** No published limit
- **Methods:**
  - `getInfrastructureSpending(fiscalYear)` - Search infrastructure awards
  - `getDomesticVsForeignSpending(fiscalYear)` - Domestic vs foreign comparison
  - `getInfrastructureBreakdown(fiscalYear)` - Capital vs operations split
  - `getSpendingByAgency(fiscalYear)` - Agency-level spending

### 4. **FRED API** (`lib/api/fred.ts`)
- **Purpose:** CPI-U data for accurate inflation adjustment
- **Key Required:** Yes - [Get API key](https://fred.stlouisfed.org/docs/api/api_key.html)
- **Rate Limit:** 120 requests/minute
- **Methods:**
  - `getCPIU(startDate, endDate)` - Get Consumer Price Index data
  - `getInflationFactor(baseYear, targetYear)` - Calculate inflation multiplier
  - `adjustForInflation(value, year, baseYear)` - Convert to constant dollars
  - `getAnnualCPI(startYear, endYear)` - Get yearly CPI averages

### 5. **OpenSecrets API** (`lib/api/opensecrets.ts`)
- **Purpose:** Campaign finance for transparency scoring
- **Key Required:** Yes - [Get API key](https://www.opensecrets.org/api/admin/index.php?function=signup)
- **Rate Limit:** 200 requests/day
- **Methods:**
  - `getLegislatorSummary(cid, cycle)` - Campaign finance totals
  - `getTopContributors(cid, cycle)` - Top donor organizations
  - `getIndustryContributions(cid, cycle)` - Industry funding breakdown
  - `calculateTransparencyScore(cid, cycle)` - Auto-compute transparency metric

## Setup Instructions

1. **Get API Keys:**
   ```bash
   # ProPublica
   https://www.propublica.org/datastore/api/propublica-congress-api
   
   # FRED
   https://fred.stlouisfed.org/docs/api/api_key.html
   
   # OpenSecrets
   https://www.opensecrets.org/api/admin/index.php?function=signup
   ```

2. **Add to `.env.local`:**
   ```env
   PROPUBLICA_API_KEY=your_key_here
   FRED_API_KEY=your_key_here
   OPENSECRETS_API_KEY=your_key_here
   ```

3. **Usage Example:**
   ```typescript
   import { propublicaAPI, fredAPI, usaspendingAPI, opensecretsAPI } from '@/lib/api';
   
   // Get real voting data
   const votes = await propublicaAPI.getMemberVotes('S000033');
   
   // Get inflation-adjusted spending
   const spending = await usaspendingAPI.getInfrastructureSpending(2023);
   const adjusted = await fredAPI.adjustForInflation(1000000, 2020, 2023);
   
   // Calculate transparency score
   const score = await opensecretsAPI.calculateTransparencyScore('N00007360');
   ```

## Integration Roadmap

### Phase 1: Leadership Data (ProPublica + GovTrack)
- Replace `lib/data/leadership.ts` mock voting records
- Wire `getMemberVotes()` into `VotingAnalysis[]`
- Update `fetchLeadershipData()` to call APIs with ISR caching

### Phase 2: Infrastructure Refresh (USAspending + FRED)
- Replace static `lib/data/infrastructure.ts` dataset
- Fetch latest fiscal year data from USAspending
- Apply FRED CPI adjustments for constant dollars
- Auto-update dashboard quarterly

### Phase 3: American Score Accuracy (All APIs)
- Use OpenSecrets for real transparency scores
- Use USAspending domestic/foreign for foreign impact
- Use ProPublica bill metadata for benefit scope
- Replace 50/100 defaults with calculated values

### Phase 4: Real-time Updates
- Set up ISR with 1-hour revalidation for voting data
- Daily updates for infrastructure spending
- Weekly recalculation of American Scores

## Caching Strategy

All clients use Next.js `fetch` with automatic caching:
- **Leadership/Voting:** 1 hour (`revalidate: 3600`)
- **Infrastructure/Financial:** 24 hours (`revalidate: 86400`)
- **Historical data:** 24 hours

## Rate Limit Management

Clients respect API limits via Next.js caching:
- ProPublica: 5,000/day → ~208/hour sustained
- GovTrack: 1,000/hour → cache reduces to ~50/hour
- FRED: 120/minute → batch requests, cache results
- OpenSecrets: 200/day → limit to 1 req/leader/day

## Testing

```bash
# Test API connectivity (add after keys configured)
npm run dev
# Visit /api/test-apis (create test endpoint)
```

## Cost

- **ProPublica:** Free
- **GovTrack:** Free
- **USAspending.gov:** Free
- **FRED:** Free
- **OpenSecrets:** Free

All APIs are completely free with rate limits.
