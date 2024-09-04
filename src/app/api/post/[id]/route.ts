import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(
  req: Request,
  { params }: { params: { id: string } }
) {
  const { id } = params;
  const res = await prisma.todo.findUnique({
    where: { id: Number(id) },
  });
  if (!res) {
    return NextResponse.json({ message: "Todo not found" }, { status: 404 });
  }
  return NextResponse.json(res);
}

export async function PUT(
  req: Request,
  { params }: { params: { id: string } }
) {
  const { id } = params;
  const { title, content } = await req.json();
  const res = await prisma.todo.update({
    where: { id: Number(id) },
    data: { title: title, content: content },
  });
  return NextResponse.json(res);
}

export async function DELETE(
  req: Request,
  { params }: { params: { id: string } }
) {
  const { id } = params;
  const res = await prisma.todo.delete({
    where: { id: Number(id) },
  });
  return res;
}
