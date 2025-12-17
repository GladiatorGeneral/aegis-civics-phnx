import { NextResponse } from "next/server";
import fs from "fs/promises";
import path from "path";

export async function GET() {
  try {
    const p = path.join(process.cwd(), "data", "qol", "indicators.json");
    const raw = await fs.readFile(p, "utf8");
    const json = JSON.parse(raw);
    return NextResponse.json(json, { status: 200 });
  } catch (err) {
    return NextResponse.json({ error: "Could not read indicators manifest" }, { status: 500 });
  }
}
