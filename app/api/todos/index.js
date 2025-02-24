import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req, res) {
    if (req.method == 'GET') {
        const todos = await prisma.todo.findMany();
        res.status(200).json(todos);
    }
    else if (req.method == 'POST') {
        const { task } = req.body;
        if (!task) return res.status(400).json({error : "Task is required "});

        const newTodo = await prisma.todo.create({
            data: { task },
        });

        res.status(201).json(newTodo);
    }
    else {
        res.setHeader('Allow', ['GET', 'POST']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}