# API Integration & Data Refresh Strategy

## 🎯 Overview
This document outlines the complete API integration strategy for the Aegis Civics Phoenix project, including all available APIs, recommended endpoints, refresh frequencies, and implementation priorities.

## 📋 Available APIs

### ✅ Currently Integrated
1. **Congress.gov API** - Congressional bills, votes, members
2. **GovTrack API** - Bill tracking, member data
3. **USAspending.gov API** - Federal spending data
4. **FRED API** - Economic indicators, inflation adjustment
5. **OpenSecrets API** - Campaign finance, transparency

### 🆕 Ready to Integrate
6. **Bureau of Labor Statistics (BLS) API**
7. **Energy Information Administration (EIA) API**
8. **Census Bureau API**

---

## 🏛️ Congress.gov API Integration Plan

### Priority Endpoints for Infrastructure & Spending Analysis

| Endpoint | Purpose | Refresh Frequency | Implementation Status |
|----------|---------|-------------------|----------------------|
| `/bill/{congress}/{billType}` | List all bills by type | **Weekly** | ✅ Implemented |
| `/bill/{congress}/{billType}/{billNumber}` | Get specific bill details | **Weekly** | ✅ Implemented |
| `/bill/{congress}/{billType}/{billNumber}/subjects` | Get bill subjects for filtering | **One-time + Weekly** | 🔲 Needs Implementation |
| `/bill/{congress}/{billType}/{billNumber}/summaries` | Get official summaries | **Weekly** | 🔲 Needs Implementation |
| `/bill/{congress}/{billType}/{billNumber}/actions` | Track bill progress | **Weekly** | 🔲 Needs Implementation |
| `/member/{bioguideId}/sponsored-legislation` | Member's sponsored bills | **Weekly** | ✅ Implemented |

### Key Subjects to Filter Infrastructure Bills
- "Transportation and Public Works"
- "Water Resources Development"
- "Energy"
- "Housing and Community Development"
- "Public Lands and Natural Resources"
- "Environmental Protection"

### Implementation Code

```typescript
// lib/api/congress-bill-tracking.ts
import { CongressAPI } from './propublica';

const congressAPI = new CongressAPI();

/**
 * Fetch infrastructure-related bills by subject
 */
export async function fetchInfrastructureBills(congress: number = 118) {
  const subjects = [
    'Transportation and Public Works',
    'Water Resources Development',
    'Energy',
  ];
  
  const bills = await congressAPI.getBills(congress);
  
  // Filter by subjects (requires subject endpoint implementation)
  const infrastructureBills = [];
  for (const bill of bills) {
    const billSubjects = await congressAPI.getBillSubjects(
      congress,
      bill.type,
      bill.number
    );
    
    if (billSubjects.some(s => subjects.includes(s))) {
      infrastructureBills.push(bill);
    }
  }
  
  return infrastructureBills;
}

/**
 * Track bill from introduction to enactment
 */
export async function trackBillProgress(
  congress: number,
  billType: string,
  billNumber: number
) {
  const actions = await congressAPI.getBillActions(congress, billType, billNumber);
  
  return {
    introduced: actions.find(a => a.text.includes('Introduced')),
    committeeAction: actions.filter(a => a.text.includes('Committee')),
    floorVote: actions.filter(a => a.text.includes('vote')),
    passed: actions.find(a => a.text.includes('Passed')),
    enacted: actions.find(a => a.text.includes('Enacted') || a.text.includes('Signed')),
  };
}
```

---

## 💰 USAspending.gov API - Enhanced Integration

### Current Implementation
- ✅ Basic infrastructure spending queries
- ✅ Domestic vs foreign spending breakdown
- ✅ Agency-level spending

### Recommended Enhancements

#### 1. Match Bills to Spending
```typescript
// lib/data/bill-spending-correlation.ts
import { usaspendingAPI } from '@/lib/api';
import { infrastructureSpending } from './infrastructure';

/**
 * Correlate passed bills with actual spending increases
 */
export async function correlateBillsToSpending(fiscalYear: number) {
  // Get spending data
  const spending = await usaspendingAPI.getInfrastructureSpending(fiscalYear);
  
  // Get bills enacted in that year
  const congress = Math.floor((fiscalYear - 1789) / 2) + 1;
  const enactedBills = await fetchInfrastructureBills(congress);
  
  // Analyze correlation
  return {
    fiscalYear,
    totalSpending: spending.total,
    enactedBillsCount: enactedBills.length,
    averagePerBill: spending.total / enactedBills.length,
    bills: enactedBills.map(bill => ({
      ...bill,
      estimatedSpendingImpact: calculateBillImpact(bill, spending),
    })),
  };
}
```

#### 2. Infrastructure Subcategories
```typescript
/**
 * Detailed infrastructure spending breakdown
 */
export async function getDetailedInfrastructureBreakdown(fiscalYear: number) {
  return {
    transportation: {
      highways: await usaspendingAPI.getSpendingByCode(fiscalYear, 'DOT-FHWA'),
      transit: await usaspendingAPI.getSpendingByCode(fiscalYear, 'DOT-FTA'),
      rail: await usaspendingAPI.getSpendingByCode(fiscalYear, 'DOT-FRA'),
      aviation: await usaspendingAPI.getSpendingByCode(fiscalYear, 'DOT-FAA'),
    },
    water: {
      drinking: await usaspendingAPI.getSpendingByCode(fiscalYear, 'EPA-DWSRF'),
      wastewater: await usaspendingAPI.getSpendingByCode(fiscalYear, 'EPA-CWSRF'),
      navigation: await usaspendingAPI.getSpendingByCode(fiscalYear, 'USACE'),
    },
    energy: {
      grid: await usaspendingAPI.getSpendingByCode(fiscalYear, 'DOE-GRID'),
      renewable: await usaspendingAPI.getSpendingByCode(fiscalYear, 'DOE-EERE'),
    },
    broadband: await usaspendingAPI.getSpendingByCode(fiscalYear, 'NTIA-BIP'),
  };
}
```

---

## 📊 BLS API Integration Plan

### Purpose
- Employment data for infrastructure sectors
- Wage data for "who benefits" analysis
- Construction cost indices

### Key Endpoints
1. **Employment by Industry**
   - Series: CES2023700001 (Construction employment)
   - Series: CES4300000001 (Transportation employment)
   
2. **Consumer Price Index**
   - Series: CUUR0000SA0 (All items)
   - Use for inflation adjustment (supplement FRED)

3. **Producer Price Index**
   - Series: PCU23700023700 (Construction)
   - Track infrastructure cost changes

### Implementation Priority: **Medium**
### Refresh Frequency: **Monthly**

```typescript
// lib/api/bls.ts
const BLS_API_KEY = process.env.BLS_API_KEY;
const BASE_URL = 'https://api.bls.gov/publicAPI/v2';

export class BLSAPI {
  async getSeries(seriesId: string, startYear: number, endYear: number) {
    const response = await fetch(`${BASE_URL}/timeseries/data/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        seriesid: [seriesId],
        startyear: startYear,
        endyear: endYear,
        registrationkey: BLS_API_KEY,
      }),
    });
    
    return response.json();
  }
  
  /**
   * Get construction employment data
   */
  async getConstructionEmployment(startYear: number = 2010) {
    return this.getSeries('CES2023700001', startYear, new Date().getFullYear());
  }
  
  /**
   * Get construction cost index
   */
  async getConstructionCostIndex(startYear: number = 2010) {
    return this.getSeries('PCU23700023700', startYear, new Date().getFullYear());
  }
}
```

---

## ⚡ EIA API Integration Plan

### Purpose
- Energy infrastructure spending
- Grid modernization data
- Renewable energy investment

### Key Endpoints
1. **Electricity Data**
   - Infrastructure investment by utilities
   - Grid reliability metrics
   
2. **Energy Consumption**
   - Infrastructure usage patterns
   - Regional energy data

### Implementation Priority: **Low**
### Refresh Frequency: **Quarterly**

```typescript
// lib/api/eia.ts
const EIA_API_KEY = process.env.EIA_API_KEY;
const BASE_URL = 'https://api.eia.gov/v2';

export class EIAAPI {
  async getElectricityInfrastructure() {
    // T&D (Transmission & Distribution) spending
    return fetch(`${BASE_URL}/electricity/retail-sales/data`, {
      headers: { 'X-Api-Key': EIA_API_KEY },
    });
  }
}
```

---

## 🏘️ Census Bureau API Integration Plan

### Purpose
- Demographic benefit analysis
- Income bracket data for "who benefits"
- Geographic distribution of infrastructure

### Key Endpoints
1. **American Community Survey (ACS)**
   - Income by geography
   - Population density
   - Infrastructure access by demographics

2. **Annual Survey of State and Local Government Finances**
   - State/local infrastructure spending
   - Complements USAspending federal data

### Implementation Priority: **High**
### Refresh Frequency: **Annually**

```typescript
// lib/api/census.ts
const CENSUS_API_KEY = process.env.CENSUS_API_KEY;

export class CensusAPI {
  /**
   * Get income distribution for benefit scope analysis
   */
  async getIncomeDistribution(year: number = 2022) {
    const response = await fetch(
      `https://api.census.gov/data/${year}/acs/acs1?` +
      `get=NAME,B19001_001E,B19001_002E,B19001_003E&` +
      `for=state:*&key=${CENSUS_API_KEY}`
    );
    return response.json();
  }
  
  /**
   * Get state/local government spending
   */
  async getStateLocalSpending(year: number) {
    return fetch(
      `https://api.census.gov/data/${year}/govs?` +
      `get=GEO_ID,NAME,CAPITAL_OUTLAY&for=state:*&key=${CENSUS_API_KEY}`
    );
  }
}
```

---

## 🔄 Data Refresh Strategy

### Refresh Schedule

| Data Type | Frequency | Rationale | Caching Strategy |
|-----------|-----------|-----------|------------------|
| **Congressional Votes** | Weekly | Congress moves slowly, weekly captures all activity | ISR: 1 hour, regenerate weekly |
| **Bill Text & Status** | Weekly | Same as votes | ISR: 1 hour, regenerate weekly |
| **Federal Spending** | Monthly | USAspending updates monthly | ISR: 24 hours, regenerate monthly |
| **Economic Indicators** | Monthly | BLS/FRED monthly releases | ISR: 24 hours, regenerate monthly |
| **Infrastructure Dataset** | Annually | Historical data, infrequent updates | Static file, manual update |
| **Census Demographics** | Annually | ACS annual release | ISR: 24 hours, regenerate annually |
| **Energy Data** | Quarterly | EIA quarterly reports | ISR: 24 hours, regenerate quarterly |

### Implementation: Next.js ISR

```typescript
// app/api/refresh/route.ts
export async function GET() {
  // Weekly refresh
  await refreshCongressionalData();
  
  // Monthly refresh (check if new month)
  if (isNewMonth()) {
    await refreshSpendingData();
    await refreshEconomicIndicators();
  }
  
  // Quarterly refresh (check if new quarter)
  if (isNewQuarter()) {
    await refreshEnergyData();
  }
  
  // Annual refresh (check if new year)
  if (isNewYear()) {
    await refreshCensusData();
  }
  
  return Response.json({ success: true });
}
```

---

## 🎯 Implementation Priorities

### Phase 1: Complete Congress.gov Integration (This Week)
- ✅ Basic member/bill data (DONE)
- 🔲 Add subject filtering
- 🔲 Add bill summaries
- 🔲 Add action tracking
- 🔲 Build bill-to-spending correlation

### Phase 2: Census Bureau Integration (Next Week)
- 🔲 Implement Census API client
- 🔲 Fetch income distribution data
- 🔲 Calculate demographic benefit scores
- 🔲 Replace placeholder "Benefit Scope" scores

### Phase 3: BLS Integration (Week 3)
- 🔲 Implement BLS API client
- 🔲 Fetch employment data
- 🔲 Track construction costs
- 🔲 Enhance foreign impact calculations

### Phase 4: EIA Integration (Week 4)
- 🔲 Implement EIA API client
- 🔲 Fetch energy infrastructure data
- 🔲 Add energy-specific analysis

---

## 📈 Success Metrics

### Current Status (Post-Placeholder Cleanup)
- ✅ Placeholder scores replaced with zeros (easy identification)
- ✅ Infrastructure scores calculated from real data
- ✅ Congress.gov voting data integrated
- ✅ 10 leaders showing real voting records

### Target Status (30 Days)
- 🎯 100% of leaders with real voting data
- 🎯 All bills tracked from introduction to enactment
- 🎯 Real demographic benefit scores (Census data)
- 🎯 Employment impact analysis (BLS data)
- 🎯 Full 26-year dataset with bill correlation

---

## 🔐 API Key Setup

Add to `.env.local`:

```bash
# Already Configured
CONGRESS_API_KEY=2zxQFDzDfZzY4pFQxkHIgtfOwGjStAMLeW5Nuxvu
FRED_API_KEY=your_key_here
OPENSECRETS_API_KEY=your_key_here

# New APIs to Configure
BLS_API_KEY=your_bls_key_here
EIA_API_KEY=your_eia_key_here
CENSUS_API_KEY=your_census_key_here
```

### Get API Keys
- **BLS**: https://www.bls.gov/developers/
- **EIA**: https://www.eia.gov/opendata/register.php
- **Census**: https://api.census.gov/data/key_signup.html

---

## 📊 Data Pipeline Architecture

```
┌─────────────────────────────────────────────────────────┐
│                    Congress.gov API                      │
│  ┌──────────────┬──────────────┬──────────────┐        │
│  │    Bills     │    Votes     │   Members    │        │
│  └──────┬───────┴──────┬───────┴──────┬───────┘        │
└─────────┼──────────────┼──────────────┼────────────────┘
          │              │              │
          ▼              ▼              ▼
┌─────────────────────────────────────────────────────────┐
│              Infrastructure Bill Filter                  │
│   (Subject matching + keyword analysis)                 │
└─────────────────┬───────────────────────────────────────┘
                  │
                  ▼
┌─────────────────────────────────────────────────────────┐
│               USAspending.gov API                       │
│  ┌──────────────┬──────────────┬──────────────┐        │
│  │  Federal $   │  Domestic %  │  Agency Data │        │
│  └──────┬───────┴──────┬───────┴──────┬───────┘        │
└─────────┼──────────────┼──────────────┼────────────────┘
          │              │              │
          ▼              ▼              ▼
┌─────────────────────────────────────────────────────────┐
│          Bill-to-Spending Correlation Engine            │
│   (Match enacted bills to spending increases)           │
└─────────────────┬───────────────────────────────────────┘
                  │
                  ▼
┌─────────────────────────────────────────────────────────┐
│               American Score Calculator                 │
│  ┌──────────────┬──────────────┬──────────────┐        │
│  │Benefit Scope │Foreign Impact│ Transparency │        │
│  │(Census Data) │(BLS + FRED)  │(OpenSecrets) │        │
│  └──────────────┴──────────────┴──────────────┘        │
└─────────────────────────────────────────────────────────┘
```

---

## ✅ Current Placeholder Status

All placeholders have been **replaced with zeros** for easy identification:

- ❌ ~~50/100 default scores~~ → ✅ 0/100 (indicates missing data)
- ✅ Infrastructure scores: Calculated from real spending data
- ✅ Voting records: First 10 leaders have real Congress.gov data
- ✅ Clear visual distinction between real and missing data

**Next Step**: Implement Census API to calculate real "Benefit Scope" scores based on demographic reach!
