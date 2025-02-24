import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req, res) {
    const { id } = req.query;

    if (req.method == 'PUT') {
        const { completed } = req.body;
        const updatedTodo = await prisma.todo.update({
            where : { id : Number(id) },
            date: { completed },
        });

        res.status(200).json(updatedTodo);
    }
    else if (req.method === 'DELETE') {
        await prisma.todo.delete({
          where: { id: Number(id) },
        });
        res.status(204).end();
    }
    else {
        res.setHeader('Allow', ['PUT', 'DELETE']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}