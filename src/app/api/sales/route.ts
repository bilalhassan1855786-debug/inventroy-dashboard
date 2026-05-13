import { NextResponse } from "next/server";
import { salesData } from "@/lib/data";

export async function GET() {
  return NextResponse.json({
    success: true,
    data: salesData,
  });
}