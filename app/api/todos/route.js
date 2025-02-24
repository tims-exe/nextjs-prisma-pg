import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET() {
  const todos = await prisma.todo.findMany();
  return new Response(JSON.stringify(todos), { status: 200 });
}

export async function POST(req) {
  const body = await req.json();
  const { task } = body;
  
  if (!task) {
    return new Response(JSON.stringify({ error: 'Task is required' }), { status: 400 });
  }

  const newTodo = await prisma.todo.create({
    data: { task },
  });

  return new Response(JSON.stringify(newTodo), { status: 201 });
}
