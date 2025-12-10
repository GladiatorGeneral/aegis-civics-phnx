import { NextResponse } from "next/server";
import { LiveUpdate } from "@/lib/types";

export const runtime = "edge";
export const maxDuration = 10;

function generateMockUpdate(id: number): LiveUpdate {
  const templates: LiveUpdate[] = [
    {
      id: `u-${id}`,
      type: "vote",
      title: "Climate Resilience Package advances",
      description: "Key amendments accepted in committee",
      timestamp: new Date().toISOString(),
      chamber: "senate",
      impact: "medium",
      source: "Senate.gov",
    },
    {
      id: `u-${id}`,
      type: "bill",
      title: "AI Safety Framework introduced",
      description: "Bipartisan sponsors target spring vote",
      timestamp: new Date().toISOString(),
      chamber: "house",
      impact: "high",
      source: "GovTrack",
    },
    {
      id: `u-${id}`,
      type: "speech",
      title: "Governor outlines digital equity plan",
      description: "State targets broadband expansion for rural regions",
      timestamp: new Date().toISOString(),
      chamber: "executive",
      impact: "low",
      source: "State.gov",
    },
  ];

  return templates[id % templates.length];
}

export async function GET(request: Request) {
  const encoder = new TextEncoder();

  const stream = new ReadableStream<Uint8Array>({
    start(controller) {
      controller.enqueue(encoder.encode(`data: ${JSON.stringify({ type: "connected", timestamp: Date.now() })}\n\n`));

      let counter = 0;
      const interval = setInterval(() => {
        const update = generateMockUpdate(counter++);
        controller.enqueue(encoder.encode(`data: ${JSON.stringify({ type: "updates", data: [update] })}\n\n`));
      }, 15000);

      const abort = () => {
        clearInterval(interval);
        controller.close();
      };

      request.signal.addEventListener("abort", abort);
    },
  });

  return new NextResponse(stream, {
    headers: {
      "Content-Type": "text/event-stream",
      "Cache-Control": "no-cache",
      Connection: "keep-alive",
    },
  });
}
