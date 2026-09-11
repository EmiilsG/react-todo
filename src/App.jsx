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
    <div style={{ padding: '30px', maxWidth: '400px', fontFamily: 'Segoe UI, sans-serif', margin: '0 auto' }}>
      <h3 style={{ color: '#2c3e50', borderBottom: '2px solid #3498db', paddingBottom: '10px' }}>
        Mana Uzdevumu Kratuve
      </h3>

      <div style={{ marginBottom: '20px', display: 'flex' }}>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ieraksti jaunu merki..."
          style={{ flexGrow: 1, padding: '10px', borderRadius: '4px 0 0 4px', border: '1px solid #ccc' }}
        />
        <button
          onClick={addTodo}
          style={{ padding: '10px 15px', background: '#3498db', color: '#fff', border: 'none', borderRadius: '0 4px 4px 0', cursor: 'pointer' }}
        >
          Pievienot
        </button>
      </div>

      <ul style={{ paddingLeft: 0, listStyle: 'none' }}>
        {todos.map((todo) => (
          <li
            key={todo.id}
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              padding: '12px 15px',
              marginBottom: '8px',
              backgroundColor: '#f8f9fa',
              borderRadius: '6px',
              borderLeft: '5px solid #3498db',
              boxShadow: '0 2px 5px rgba(0,0,0,0.05)',
              fontWeight: 'bold',
              color: '#34495e'
            }}
          >
            <span>{todo.text}</span>
            <button
              onClick={() => deleteTodo(todo.id)}
              style={{ cursor: 'pointer', background: 'none', border: 'none', color: 'red', fontWeight: 'bold' }}
            >
              Dzest
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
