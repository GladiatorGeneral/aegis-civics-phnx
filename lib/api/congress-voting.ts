/**
 * Congress.gov Voting Data Integration
 * Fetches real voting records and maps them to our VotingAnalysis type
 */

import { CongressAPI } from './propublica';
import { VotingAnalysis } from '@/lib/types';

const congressAPI = new CongressAPI();

/**
 * Calculate American Score for a bill based on metadata
 * This is a simplified algorithm - in production, you'd use ML/NLP analysis
 */
function calculateBillAmericanScore(bill: any): VotingAnalysis['americanScore'] {
  // Default scores - these would be calculated from bill text analysis
  let benefitScope = 50;
  let foreignImpact = 50;
  let transparency = 50;

  // Simple heuristics based on bill metadata
  if (bill.title) {
    const title = bill.title.toLowerCase();
    
    // Benefit Scope: Look for domestic-focused keywords
    if (title.includes('american') || title.includes('domestic') || title.includes('u.s.')) {
      benefitScope += 20;
    }
    if (title.includes('infrastructure') || title.includes('education') || title.includes('healthcare')) {
      benefitScope += 15;
    }

    // Foreign Impact: Look for foreign aid, trade keywords
    if (title.includes('foreign') || title.includes('international') || title.includes('aid')) {
      foreignImpact -= 25;
    }
    if (title.includes('defense') && !title.includes('national security')) {
      foreignImpact -= 15;
    }

    // Transparency: Look for oversight, reporting keywords
    if (title.includes('transparency') || title.includes('oversight') || title.includes('report')) {
      transparency += 25;
    }
    if (title.includes('classified') || title.includes('secret')) {
      transparency -= 20;
    }
  }

  // Normalize to 0-100 range
  benefitScope = Math.max(0, Math.min(100, benefitScope));
  foreignImpact = Math.max(0, Math.min(100, foreignImpact));
  transparency = Math.max(0, Math.min(100, transparency));

  const overall = Math.round((benefitScope + foreignImpact + transparency) / 3);

  return {
    overall,
    breakdown: {
      benefitScope,
      foreignImpact,
      transparency,
    },
  };
}

/**
 * Fetch recent voting record for a member by bioguideId
 */
export async function fetchMemberVotingRecord(bioguideId: string): Promise<VotingAnalysis[]> {
  try {
    // Get recent sponsored legislation (most recent bills they've worked on)
    const { sponsoredLegislation } = await congressAPI.getMemberSponsoredLegislation(bioguideId, 10);

    if (!sponsoredLegislation || sponsoredLegislation.length === 0) {
      return [];
    }

    // Map bills to VotingAnalysis
    const votingRecords: VotingAnalysis[] = sponsoredLegislation
      .slice(0, 5) // Take top 5 most recent
      .map((bill) => {
        const billId = `${bill.type}-${bill.number}-${bill.congress}`;
        const americanScore = calculateBillAmericanScore(bill);
        
        // Determine impact based on action stage
        let impact: 'high' | 'medium' | 'low' = 'medium';
        if (bill.latestAction?.text) {
          const action = bill.latestAction.text.toLowerCase();
          if (action.includes('passed') || action.includes('enacted') || action.includes('signed')) {
            impact = 'high';
          } else if (action.includes('introduced') || action.includes('referred')) {
            impact = 'low';
          }
        }

        return {
          billId,
          billTitle: bill.title || 'Untitled Bill',
          vote: 'yea' as const, // Sponsor = yea vote
          americanScore,
          impact,
        };
      });

    return votingRecords;
  } catch (error) {
    console.error(`Error fetching voting record for ${bioguideId}:`, error);
    return [];
  }
}

/**
 * Fetch recent House votes and member positions
 */
export async function fetchRecentHouseVotes(congress: number = 118, session: number = 2): Promise<any[]> {
  try {
    const { votes } = await congressAPI.getHouseVotes(congress, session, 20);
    return votes || [];
  } catch (error) {
    console.error('Error fetching House votes:', error);
    return [];
  }
}

/**
 * Get member's vote on a specific roll call
 */
export async function getMemberVoteOnRollCall(
  bioguideId: string,
  congress: number,
  session: number,
  voteNumber: number
): Promise<{ vote: string; bill?: any } | null> {
  try {
    const { members } = await congressAPI.getHouseVoteMembers(congress, session, voteNumber);
    const memberVote = members?.find((m: any) => m.bioguideId === bioguideId);
    
    if (memberVote) {
      const voteDetails = await congressAPI.getHouseVoteDetails(congress, session, voteNumber);
      return {
        vote: memberVote.vote,
        bill: voteDetails.vote?.bill,
      };
    }
    
    return null;
  } catch (error) {
    console.error(`Error fetching vote for ${bioguideId}:`, error);
    return null;
  }
}
