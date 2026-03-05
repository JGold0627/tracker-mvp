import { db } from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET() {
  const projects = await db.project.findMany({
    orderBy: { createdAt: "desc" },
  });
  return NextResponse.json(projects);
}

export async function POST(req: Request) {
  const { name } = await req.json();
  const project = await db.project.create({ data: { name } });
  return NextResponse.json(project);
}