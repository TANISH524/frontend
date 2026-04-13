import { NextRequest, NextResponse } from "next/server";
import { perfumesData } from "@/lib/perfumesData";

export async function GET(_req: NextRequest, ctx: { params: Promise<{ id: string }> }) {
  const { id } = await ctx.params;
  const perfume = perfumesData.find((p) => p.id === id);
  if (!perfume) {
    return NextResponse.json({ error: "Perfume not found" }, { status: 404 });
  }
  return NextResponse.json(perfume);
}

