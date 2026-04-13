import { NextResponse } from "next/server";
import { perfumesData } from "@/lib/perfumesData";

export function GET(_req: Request, ctx: { params: { id: string } }) {
  const perfume = perfumesData.find((p) => p.id === ctx.params.id);
  if (!perfume) {
    return NextResponse.json({ error: "Perfume not found" }, { status: 404 });
  }
  return NextResponse.json(perfume);
}

