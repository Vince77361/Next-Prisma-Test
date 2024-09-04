import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET() {
  const res = await prisma.todo.findMany();
  return NextResponse.json(res);
}

export async function POST(req: Request) {
  // create todo
  const { title, content } = await req.json();
  const res = await prisma.todo.create({
    data: { title: title, content: content },
  });
  return NextResponse.json(res);
}
