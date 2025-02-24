'use client';

import Item from "./Item";

export default function List({ todos, refreshTodos }) {
  return (
    <ul>
      {todos.map((todo) => (
        <Item
          key={todo.id}
          todo={todo}
          onUpdate={refreshTodos}
          onDelete={refreshTodos}
        />
      ))}
    </ul>
  );
}
