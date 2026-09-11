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

  return (
    <div style={{ padding: '20px', maxWidth: '350px', fontFamily: 'sans-serif' }}>
      <h3>To-Do List</h3>

      <div style={{ marginBottom: '15px' }}>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Pievieno uzdevumu"
        />
        <button onClick={addTodo} style={{ marginLeft: '5px' }}>Pievienot</button>
      </div>

      <ul style={{ paddingLeft: 0, listStyle: 'none' }}>
        {todos.map((todo) => (
          <li key={todo.id} style={{ padding: '5px 0'}}>
            {todo.text}
          </li>
        ))}
      </ul>
    </div>
  );
}
