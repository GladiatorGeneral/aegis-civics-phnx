/**
 * Supabase Database Schema
 * 
 * Tables for caching API responses and storing analysis results
 * Run this SQL in your Supabase project
 */

-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Bills table: Cache bill details from Congress.gov
CREATE TABLE bills (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  bill_id TEXT UNIQUE NOT NULL, -- Format: "hr-3684-117"
  congress INTEGER NOT NULL,
  bill_type TEXT NOT NULL, -- "hr", "s", "hjres", etc.
  bill_number INTEGER NOT NULL,
  title TEXT NOT NULL,
  summary TEXT,
  sponsor_name TEXT,
  sponsor_party TEXT,
  sponsor_state TEXT,
  introduced_date DATE,
  latest_action TEXT,
  status TEXT,
  full_text TEXT, -- Full bill text if available
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW(),
  cache_expires_at TIMESTAMPTZ DEFAULT NOW() + INTERVAL '7 days'
);

-- Bill Analysis table: Store DeepSeek AI analysis results
CREATE TABLE bill_analysis (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  bill_id TEXT REFERENCES bills(bill_id) ON DELETE CASCADE,
  summary TEXT NOT NULL,
  key_provisions JSONB, -- Array of provisions
  american_score JSONB NOT NULL, -- { benefitScope, foreignImpact, transparency, overall }
  infrastructure_relevance INTEGER CHECK (infrastructure_relevance >= 0 AND infrastructure_relevance <= 100),
  domestic_focus INTEGER CHECK (domestic_focus >= 0 AND domestic_focus <= 100),
  estimated_cost TEXT,
  infrastructure_provisions JSONB, -- { highways, water, energy, broadband, other }
  analyzed_at TIMESTAMPTZ DEFAULT NOW(),
  analysis_model TEXT DEFAULT 'deepseek-chat',
  UNIQUE(bill_id)
);

-- Voting Records table: Cache Congress.gov voting data
CREATE TABLE voting_records (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  bioguide_id TEXT NOT NULL,
  member_name TEXT NOT NULL,
  party TEXT NOT NULL,
  state TEXT,
  chamber TEXT CHECK (chamber IN ('house', 'senate')),
  congress INTEGER NOT NULL,
  roll_call_number INTEGER NOT NULL,
  vote_date DATE NOT NULL,
  vote_position TEXT CHECK (vote_position IN ('Yea', 'Nay', 'Not Voting', 'Present')),
  bill_id TEXT,
  vote_question TEXT,
  vote_result TEXT,
  bill_american_score INTEGER, -- Cached American Score for the bill
  created_at TIMESTAMPTZ DEFAULT NOW(),
  UNIQUE(bioguide_id, congress, roll_call_number)
);

-- Leader Scores table: Aggregate American Scores for leaders
CREATE TABLE leader_scores (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  bioguide_id TEXT UNIQUE NOT NULL,
  member_name TEXT NOT NULL,
  party TEXT NOT NULL,
  state TEXT,
  chamber TEXT,
  total_votes INTEGER DEFAULT 0,
  avg_american_score NUMERIC(5,2),
  infrastructure_votes INTEGER DEFAULT 0,
  infrastructure_avg_score NUMERIC(5,2),
  last_updated TIMESTAMPTZ DEFAULT NOW()
);

-- API Cache table: Generic caching for API responses
CREATE TABLE api_cache (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  cache_key TEXT UNIQUE NOT NULL,
  api_name TEXT NOT NULL, -- 'congress', 'bls', 'eia', 'census', 'fred'
  endpoint TEXT NOT NULL,
  response_data JSONB NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  expires_at TIMESTAMPTZ NOT NULL
);

-- Bill Spending Correlation table: Track bill impacts on spending
CREATE TABLE bill_spending_correlation (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  bill_id TEXT UNIQUE NOT NULL,
  bill_title TEXT NOT NULL,
  enacted_date DATE NOT NULL,
  authorized_amount NUMERIC(10,2), -- In billions
  baseline_spending NUMERIC(10,2),
  year1_spending NUMERIC(10,2),
  year2_spending NUMERIC(10,2),
  year3_spending NUMERIC(10,2),
  correlation_score INTEGER CHECK (correlation_score >= 0 AND correlation_score <= 100),
  efficiency_percent NUMERIC(5,2),
  lag_months INTEGER,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Indexes for performance
CREATE INDEX idx_bills_congress ON bills(congress);
CREATE INDEX idx_bills_cache_expires ON bills(cache_expires_at);
CREATE INDEX idx_bill_analysis_bill_id ON bill_analysis(bill_id);
CREATE INDEX idx_voting_records_bioguide ON voting_records(bioguide_id);
CREATE INDEX idx_voting_records_congress ON voting_records(congress);
CREATE INDEX idx_leader_scores_party ON leader_scores(party);
CREATE INDEX idx_api_cache_key ON api_cache(cache_key);
CREATE INDEX idx_api_cache_expires ON api_cache(expires_at);

-- Auto-update updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER update_bills_updated_at BEFORE UPDATE ON bills
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

-- Clean up expired cache entries (run as scheduled function)
CREATE OR REPLACE FUNCTION clean_expired_cache()
RETURNS void AS $$
BEGIN
  DELETE FROM bills WHERE cache_expires_at < NOW();
  DELETE FROM api_cache WHERE expires_at < NOW();
END;
$$ LANGUAGE plpgsql;

-- Sample query functions

-- Get bill with analysis
CREATE OR REPLACE FUNCTION get_bill_with_analysis(p_bill_id TEXT)
RETURNS TABLE (
  bill_data JSONB,
  analysis_data JSONB
) AS $$
BEGIN
  RETURN QUERY
  SELECT 
    to_jsonb(b.*) as bill_data,
    to_jsonb(ba.*) as analysis_data
  FROM bills b
  LEFT JOIN bill_analysis ba ON b.bill_id = ba.bill_id
  WHERE b.bill_id = p_bill_id;
END;
$$ LANGUAGE plpgsql;

-- Get leader's voting summary
CREATE OR REPLACE FUNCTION get_leader_voting_summary(p_bioguide_id TEXT)
RETURNS TABLE (
  member_name TEXT,
  party TEXT,
  total_votes BIGINT,
  avg_score NUMERIC,
  recent_votes JSONB
) AS $$
BEGIN
  RETURN QUERY
  SELECT 
    vr.member_name,
    vr.party,
    COUNT(*) as total_votes,
    AVG(vr.bill_american_score) as avg_score,
    jsonb_agg(
      jsonb_build_object(
        'vote_date', vr.vote_date,
        'vote_position', vr.vote_position,
        'bill_id', vr.bill_id,
        'american_score', vr.bill_american_score
      ) ORDER BY vr.vote_date DESC
    ) FILTER (WHERE vr.vote_date >= CURRENT_DATE - INTERVAL '90 days') as recent_votes
  FROM voting_records vr
  WHERE vr.bioguide_id = p_bioguide_id
  GROUP BY vr.member_name, vr.party;
END;
$$ LANGUAGE plpgsql;
