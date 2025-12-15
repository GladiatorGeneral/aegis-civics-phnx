# American Scale Dashboard

![Next.js](https://img.shields.io/badge/Next.js-16.0.8-black?logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-CSS-38bdf8?logo=tailwind-css)

A comprehensive civic intelligence platform for tracking US government leaders, federal legislation, and financial data. Built with Next.js 16, TypeScript, and Tailwind CSS.

## 🎯 Features

### 📊 Leadership Dashboard
- **Leader Categorization**: Browse senators, representatives, governors, and mayors in collapsible card sections
- **American Score System**: Proprietary scoring algorithm rating leaders on:
  - **Benefit Scope** (0-100): Who benefits from their voting record
  - **Foreign Impact** (0-100): Domestic vs. foreign resource allocation
  - **Transparency** (0-100): Oversight and accountability measures
- **Real Voting Records**: Integration with Congress.gov API for actual voting data
- **Leader Cards**: Detailed profiles with metrics, committees, recent activity, and AI insights

### 💰 Federal Finance Dashboard
- **FY 2024 Overview**: Real-time federal finance statistics
  - $4.9T Revenue | $6.8T Spending | $1.8T Deficit | $36.2T Total Debt
- **Revenue Breakdown**: Individual income tax (49%), payroll (35%), corporate (11%), other (5%)
- **Spending Categories**: Social Security (22%), Defense (18%), State/Local transfers (17%), Medicare (13%), Interest (13%)
- **Major Programs**: Detailed data on Social Security, Medicare, and Medicaid enrollment and costs
- **Historical Trends**: Interactive chart showing 1980-2024 revenue vs. spending with deficit visualization

### 🏗️ Infrastructure Analysis
- **26-Year Dataset**: Federal infrastructure spending (1998-2023) adjusted for inflation
- **Real-Time Metrics**: Enhanced scoring using Census, BLS, and EIA data
- **Bill-to-Spending Correlation**: Track how major legislation (IIJA, CHIPS Act, IRA) impacts actual spending
- **Efficiency Scoring**: Color-coded effectiveness ratings for infrastructure investments

### 🤖 AI-Powered Features
- **Bill Analysis**: DeepSeek API integration for low-cost bill text analysis (~$0.14 per million tokens vs OpenAI ~$2.50)
- **Batch Processing**: Analyze multiple bills simultaneously with American Score calculations
- **Infrastructure Detection**: AI extracts infrastructure provisions and cost estimates from legislation

### 🗄️ Database & Caching
- **Supabase Integration**: Persistent storage for bills, analyses, voting records, and leader scores
- **Smart Caching**: ISR (Incremental Static Regeneration) with configurable expiry
  - Voting data: 1 hour
  - Financial data: 24 hours
  - Economic indicators: 30 days
- **API Response Cache**: Reduces external API calls and costs

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ and npm
- API Keys (optional for enhanced features):
  - Congress.gov API
  - Census Bureau API
  - BLS (Bureau of Labor Statistics) API
  - EIA (Energy Information Administration) API
  - DeepSeek API (for bill analysis)
  - FRED API (Federal Reserve Economic Data)

### Installation

```bash
# Clone the repository
git clone https://github.com/GladiatorGeneral/aegis-civics-phnx.git
cd aegis-civics-phnx

# Install dependencies
npm install

# Set up environment variables
cp .env.example .env.local
# Edit .env.local with your API keys

# Run the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the dashboard.

## 🌐 Live Website

- [Production Site (Vercel)](https://aegis-civics-phnx.vercel.app/)
- [GitHub Repository](https://github.com/GladiatorGeneral/aegis-civics-phnx)

### Environment Variables

Create a `.env.local` file with the following keys:

```env
# Required for real voting data
CONGRESS_API_KEY=your_congress_api_key

# Optional: Enhanced infrastructure scoring (currently using fallbacks)
BLS_API_KEY=your_bls_api_key
EIA_API_KEY=your_eia_api_key
CENSUS_API_KEY=your_census_api_key

# Optional: AI-powered bill analysis
DEEPSEEK_API_KEY=your_deepseek_api_key

# Optional: Economic data
FRED_API_KEY=your_fred_api_key

# Optional: Database caching (not yet implemented)
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

## 📁 Project Structure

```
aegis-civics-phnx/
├── app/
│   ├── dashboard/          # Leaders dashboard page
│   ├── finance/            # Federal finance page
│   ├── api/
│   │   ├── analyze-bills/  # Batch bill analysis endpoint
│   │   ├── test-apis/      # API testing endpoint
│   │   └── test-deepseek/  # DeepSeek AI testing
│   └── layout.tsx          # Root layout with navbar
├── components/
│   ├── dashboard/
│   │   └── LeaderCategoryDashboard.tsx  # Collapsible leader sections
│   ├── finance/
│   │   └── FederalFinanceDashboard.tsx  # FY2024 finance visualizations
│   ├── infrastructure/
│   │   ├── InfrastructureCard.tsx       # 26-year spending sparkline
│   │   └── BillSpendingCorrelationChart.tsx  # Bill impact tracking
│   ├── layout/
│   │   └── Navbar.tsx      # Global navigation
│   ├── leadership/
│   │   └── LeaderCard.tsx  # Leader profile cards
│   ├── scoring/
│   │   └── AmericanScoreDashboard.tsx   # Score rankings
│   └── ui/
│       └── CollapsibleCard.tsx  # Reusable collapsible component
├── lib/
│   ├── api/
│   │   ├── congress-voting.ts   # Congress.gov API client
│   │   ├── deepseek.ts          # DeepSeek AI client
│   │   ├── bls.ts               # Bureau of Labor Statistics
│   │   ├── eia.ts               # Energy Information Admin
│   │   └── census.ts            # Census Bureau API
│   ├── data/
│   │   ├── leadership.ts        # Leader data with real voting records
│   │   ├── infrastructure.ts    # 26-year spending dataset
│   │   ├── federal-finance.ts   # FY2024 federal finance data
│   │   ├── bill-spending-correlation.ts  # Bill impact tracking
│   │   └── infrastructure-score-enhanced.ts  # Enhanced scoring
│   ├── db/
│   │   └── supabase.ts          # Supabase client & helpers
│   └── types/
│       ├── leadership.ts        # Leader & voting types
│       └── infrastructure.ts    # Infrastructure types
└── supabase/
    ├── schema.sql               # Database schema (6 tables)
    └── README.md                # Supabase setup guide
```

## 🔌 API Endpoints

### `POST /api/analyze-bills`
Analyze bills using DeepSeek AI. Accepts bill IDs or congress/chamber parameters.

**Request:**
```json
{
  "billIds": ["hr-3684-117", "hr-4346-117"]
}
```

**Response:**
```json
{
  "analyses": [
    {
      "billId": "hr-3684-117",
      "title": "Infrastructure Investment and Jobs Act",
      "americanScores": {
        "benefitScope": 85,
        "foreignImpact": 92,
        "transparency": 78,
        "overall": 85
      },
      "infrastructureRelevance": "High",
      "estimatedCost": "$1.2 trillion"
    }
  ]
}
```

### `GET /api/test-apis`
Test all configured API connections (Congress.gov, BLS, EIA, Census, FRED).

### `GET /api/test-deepseek`
Test DeepSeek AI bill analysis with a sample bill.

## 🎨 Tech Stack

- **Framework**: Next.js 16.0.8 (App Router, Turbopack)
- **Language**: TypeScript 5.0
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Database**: Supabase (PostgreSQL)
- **APIs**:
  - Congress.gov (voting records)
  - DeepSeek AI (bill analysis)
  - Census Bureau (demographics)
  - BLS (labor statistics)
  - EIA (energy data)
  - FRED (economic indicators)

## 📊 Data Sources

1. **Congress.gov API**: Real voting records for first 10 leaders
2. **Infrastructure Dataset**: 26 years (1998-2023) of federal spending in constant 2023 USD
3. **Federal Finance**: FY 2024 US Government Financial Report data
4. **Bill Tracking**: 5 major infrastructure bills (IIJA, CHIPS Act, IRA, ARP, FAST Act)

## 🚧 Roadmap

- [ ] Enable Supabase caching to reduce API calls
- [ ] Re-enable BLS/EIA/Census APIs (currently using fallbacks)
- [ ] Add OpenSecrets campaign finance integration
- [ ] Implement auto-fetching for recent bills
- [ ] Add bill comparison visualizations
- [ ] Create state-level infrastructure breakdowns
- [ ] Build leader-to-bill relationship graphs

## 🤝 Contributing

This is a civic transparency project. Contributions are welcome! Please ensure:
- All data sources are properly cited
- API keys are never committed
- Code follows existing TypeScript patterns
- New features include appropriate error handling

## 📄 License

MIT License - See LICENSE file for details

## 🙏 Acknowledgments

- Data provided by Congress.gov, Census Bureau, BLS, EIA, and FRED APIs
- Infrastructure spending data adjusted for inflation using BLS CPI-U
- Bill analysis powered by DeepSeek AI
- Built with Next.js, Tailwind CSS, and Framer Motion

---

**Built with 🇺🇸 for civic transparency and accountability**
