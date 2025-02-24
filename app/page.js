'use client';

import { useEffect, useState } from 'react';
import axios from 'axios';
import Form from './components/Form';
import List from './components/List';

export default function Home() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetchTodos();
  }, []);

  const fetchTodos = async () => {
    const response = await axios.get('/api/todos');
    setTodos(response.data);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-96">
        <h1 className="text-2xl font-bold mb-4 text-black">Todo App</h1>
        <Form onAdd={fetchTodos} />
        <List todos={todos} refreshTodos={fetchTodos} />
      </div>
    </div>
  );
}
