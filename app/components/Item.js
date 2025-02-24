'use client';

import axios from 'axios';

export default function Item({ todo, onUpdate, onDelete }) {
  const toggleCompletion = async () => {
    await axios.put(`/api/todos/${todo.id}`, { completed: !todo.completed });
    onUpdate();
  };

  const handleDelete = async () => {
    await axios.delete(`/api/todos/${todo.id}`);
    onDelete();
  };

  return (
    <li className="flex justify-between items-center mb-2 text-black">
      <span
        className={`cursor-pointer ${todo.completed ? 'line-through text-gray-600' : ''}`}
        onClick={toggleCompletion}
      >
        {todo.task}
      </span>
      <button onClick={handleDelete} className="text-red-500">Delete</button>
    </li>
  );
}
