'use client';

import { useState, useEffect } from 'react';
import axios from 'axios';

export default function Home() {
  const [todos, setTodos] = useState([]);
  const [task, setTask] = useState('');

  useEffect(() => {
    fetchTodos();
  }, []);

  const fetchTodos = async () => {
    const response = await axios.get('/api/todos');
    setTodos(response.data);
  };

  const addTodo = async () => {
    if (!task.trim()) return;
    await axios.post('/api/todos', { task });
    setTask('');
    fetchTodos();
  };

  const toggleTodo = async (id, completed) => {
    await axios.put(`/api/todos/${id}`, { completed: !completed });
    fetchTodos();
  };

  const deleteTodo = async (id) => {
    await axios.delete(`/api/todos/${id}`);
    fetchTodos();
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900">
      <div className="bg-black p-8 rounded shadow-md w-96">
        <h1 className="text-2xl font-bold mb-4">Todo App</h1>
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Add a new task"
          className="border p-2 w-full mb-4 rounded text-black"
        />
        <button
          onClick={addTodo}
          className="bg-blue-500 text-white px-4 py-2 rounded w-full mb-4"
        >
          Add Task
        </button>
        <ul>
          {todos.map((todo) => (
            <li key={todo.id} className="flex justify-between items-center mb-2">
              <span
                className={`cursor-pointer ${todo.completed ? 'line-through text-gray-400' : ''}`}
                onClick={() => toggleTodo(todo.id, todo.completed)}
              >
                {todo.task}
              </span>
              <button onClick={() => deleteTodo(todo.id)} className="text-red-500">Delete</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
