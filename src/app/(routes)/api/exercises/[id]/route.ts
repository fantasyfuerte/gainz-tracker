import { NextResponse } from "next/server";

export function GET() {
  return NextResponse.json({ message: "showing exercise"});
}
export function DELETE() {
  return NextResponse.json({ message: "deleting exercise"});
}
export function PUT() {
  return NextResponse.json({ message: "updating exercise"});
}
