import { NextResponse } from 'next/server';
import { deepseekAPI } from '@/lib/api/deepseek';

const SYSTEM_PROMPT = `
You are the PhnxRise Assistant, an expert AI guide for Project Phnx (formerly Illumio).
Project Phnx is a comprehensive national system renewal initiative for the United States.

KEY FACTS:
- Budget: $850B over 10 years.
- Core Goal: "E Pluribus Unum" - Out of Many, One System.
- HQ: Nexus Prime, Callahan County, Texas.
- Governance: Leadership Triad (Supreme Steward, Chancellor of States, Chancellor of Cities).
- Structure: 12 Systemic Renewal Directorates (SRDs).

ECONOMIC IMPACT (2037 Projections):
- ROI: 5,603% (Every $1 invested returns $56.03).
- GDP Added: +$38.4 Trillion total over 10 years.
- Lives Saved: 1.46 Million (Physical), 46.2 Million (Mental Health improved).
- New Jobs: 86.1 Million.

YOUR ROLE:
- Answer questions about the blueprints (Water, AI, Food, Medical, etc.).
- Explain the economic modeling and "Future Numbers".
- Maintain a professional, visionary, and data-driven tone.
- If asked about "Illumio", clarify that it is now "PhnxRise".

Do not make up data. If you don't know something specific, refer to the "PhnxRise Blueprints".
`;

export async function POST(req: Request) {
  try {
    const { messages } = await req.json();

    if (!messages || !Array.isArray(messages)) {
      return NextResponse.json({ error: 'Invalid messages format' }, { status: 400 });
    }

    // Prepend the system prompt
    const fullMessages = [
      { role: 'system', content: SYSTEM_PROMPT },
      ...messages
    ];

    const response = await deepseekAPI.chat(fullMessages);

    // Extract the content
    const answer = response.choices[0]?.message?.content || "I apologize, I couldn't generate a response.";

    return NextResponse.json({ 
      role: 'assistant', 
      content: answer 
    });

  } catch (error: any) {
    console.error('PhnxRise Chat Error:', error);
    return NextResponse.json(
      { error: 'Failed to process chat request', details: error.message, stack: error.stack }, 
      { status: 500 }
    );
  }
}
