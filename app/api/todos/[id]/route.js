import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function PUT(req, context) {
  const { id } = await context.params; // Await params here
  const body = await req.json();
  const { completed } = body;

  const updatedTodo = await prisma.todo.update({
    where: { id: Number(id) },
    data: { completed },
  });

  return new Response(JSON.stringify(updatedTodo), { status: 200 });
}

export async function DELETE(req, context) {
  const { id } = await context.params; // Await params here

  await prisma.todo.delete({
    where: { id: Number(id) },
  });

  return new Response(null, { status: 204 });
}
