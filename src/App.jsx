import React, { useState } from 'react';

export default function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');

  const addTodo = () => {
    if (input.trim()) {
      setTodos([...todos, { id: Date.now(), text: input }]);
      setInput('');
    }
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <div style={{ padding: '20px', maxWidth: '350px', fontFamily: 'sans-serif' }}>
      <h3>To-Do List (Ar dzēšanas funkciju)</h3>

      <div style={{ marginBottom: '15px' }}>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Jauns uzdevums..."
        />
        <button onClick={addTodo} style={{ marginLeft: '5px' }}>Pievienot</button>
      </div>

      <ul style={{ paddingLeft: 0, listStyle: 'none' }}>
        {todos.map((todo) => (
          <li key={todo.id} style={{ display: 'flex', justifyContent: 'space-between', padding: '5px 0' }}>
            <span>{todo.text}</span>
            <button onClick={() => deleteTodo(todo.id)} style={{ cursor: 'pointer', background: 'none', border: 'none' }}>
              Dzēst
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
