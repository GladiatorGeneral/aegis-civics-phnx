import { NextResponse } from "next/server";
import fs from "fs/promises";
import path from "path";

function parseCsv(csv: string) {
  const lines = csv.trim().split(/\r?\n/);
  if (lines.length === 0) return [];
  const headers = lines[0].split(",").map((h) => h.trim());
  return lines.slice(1).map((l) => {
    const cols = l.split(",");
    const obj: Record<string, string> = {};
    headers.forEach((h, i) => (obj[h] = (cols[i] ?? "").trim()));
    return obj;
  });
}

export async function GET(req: Request) {
  try {
    const url = new URL(req.url);
    const indicator = url.searchParams.get("indicator");
    const format = (url.searchParams.get("format") || "json").toLowerCase();
    if (!indicator) return NextResponse.json({ error: "missing indicator param" }, { status: 400 });

    const csvPath = path.join(process.cwd(), "data", "qol", `${indicator}.csv`);
    let raw: string;
    try {
      raw = await fs.readFile(csvPath, "utf8");
    } catch (e) {
      return NextResponse.json({ error: "indicator data not found" }, { status: 404 });
    }

    if (format === "csv") {
      return new NextResponse(raw, { status: 200, headers: { "content-type": "text/csv" } });
    }

    const json = parseCsv(raw);
    return NextResponse.json(json, { status: 200 });
  } catch (err) {
    return NextResponse.json({ error: "internal error" }, { status: 500 });
  }
}
