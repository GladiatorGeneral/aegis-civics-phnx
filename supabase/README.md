# Supabase Setup Guide

## Prerequisites
- Supabase account: https://supabase.com/dashboard
- Created a new Supabase project

## Step 1: Get Your Credentials

1. Go to your Supabase project dashboard
2. Navigate to **Settings** → **API**
3. Copy the following values:
   - **Project URL**: `NEXT_PUBLIC_SUPABASE_URL`
   - **anon/public key**: `NEXT_PUBLIC_SUPABASE_ANON_KEY`

## Step 2: Add to Environment Variables

Add to `.env.local`:

```bash
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key-here
```

## Step 3: Run Database Schema

1. In Supabase dashboard, go to **SQL Editor**
2. Click **New query**
3. Copy the entire contents of `supabase/schema.sql`
4. Paste and click **Run**

This will create:
- ✅ `bills` table - Cache bill details from Congress.gov
- ✅ `bill_analysis` table - Store DeepSeek AI analysis results
- ✅ `voting_records` table - Cache voting data
- ✅ `leader_scores` table - Aggregate American Scores
- ✅ `api_cache` table - Generic API response caching
- ✅ `bill_spending_correlation` table - Track bill impacts

## Step 4: Install Supabase Client

```bash
npm install @supabase/supabase-js
```

## Step 5: Verify Setup

Visit your app and the Supabase client will automatically:
- Cache API responses to reduce rate limit usage
- Store bill analysis results for reuse
- Track voting records and leader scores

## Usage Examples

### Cache a bill
```typescript
import { cacheBill } from '@/lib/db/supabase';

await cacheBill({
  bill_id: 'hr-3684-117',
  congress: 117,
  bill_type: 'hr',
  bill_number: 3684,
  title: 'Infrastructure Investment and Jobs Act',
  // ... other fields
});
```

### Get cached analysis
```typescript
import { getCachedBillAnalysis } from '@/lib/db/supabase';

const analysis = await getCachedBillAnalysis('hr-3684-117');
if (analysis) {
  console.log('American Score:', analysis.american_score.overall);
}
```

### Cache API responses
```typescript
import { getCachedAPIResponse, cacheAPIResponse } from '@/lib/db/supabase';

// Try to get from cache first
let data = await getCachedAPIResponse<MyDataType>('congress-bills-118');

if (!data) {
  // Fetch from API
  data = await fetchFromAPI();
  
  // Cache for 1 hour
  await cacheAPIResponse(
    'congress-bills-118',
    'congress',
    '/bills/118',
    data,
    3600
  );
}
```

## Benefits

1. **Reduced API Calls**: Cache responses to avoid hitting rate limits
2. **Faster Load Times**: Return cached data instantly
3. **Cost Savings**: Reuse expensive DeepSeek analysis
4. **Historical Tracking**: Store voting records and scores over time
5. **Analytics**: Query trends and patterns in the database

## Optional: Enable Row Level Security (RLS)

For production, enable RLS policies:

```sql
-- Allow public read access
CREATE POLICY "Enable read access for all users" ON bills
  FOR SELECT USING (true);

-- Only allow insert/update from service role
-- (Backend API routes with service key)
```

Then use service role key for write operations in API routes.
