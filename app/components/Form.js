'use client';

import { useState } from 'react';
import axios from 'axios';

export default function Form({ onAdd }) {
  const [task, setTask] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!task.trim()) return;

    await axios.post('/api/todos', { task });
    setTask('');
    onAdd();
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Add a new task"
        className="border p-2 w-full rounded mb-2 text-black"
      />
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded w-full"
      >
        Add Task
      </button>
    </form>
  );
}
