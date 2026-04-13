import { NextResponse } from "next/server";
import { perfumesData } from "@/lib/perfumesData";

export function GET() {
  return NextResponse.json(perfumesData);
}

