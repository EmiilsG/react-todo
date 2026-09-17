import React from 'react';

interface Todo {
  id: number;
  text: string;
}

interface Props {
  todo: Todo;
  onDelete: (id: number) => void;
}

export default function TodoItem({ todo, onDelete }: Props) {
  return (
    <li style={{
      display: 'flex',
      justifyContent: 'space-between',
      padding: 10,
      marginBottom: 5,
      background: '#f8f9fa'
    }}>
      {todo.text}
      <button onClick={() => onDelete(todo.id)}>Dzēst</button>
    </li>
  );
}

