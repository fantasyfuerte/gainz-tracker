import { NextResponse } from "next/server";
import { prisma } from "@/libs/prisma";

export async function GET() {
  const exercises = await prisma.exercise.findMany();
  if (exercises.length === 0)
    return NextResponse.json({ message: "No exercises found" });
  return NextResponse.json({ exercises: [...exercises] });
}

export async function POST(request: Request) {
  const body = await request.json();
  console.log(body);
  return NextResponse.json({ message: "creating exercise" });
}
