import React, { useState } from 'react';
import TodoItem from './TodoItem';
import Spinner from './Spinner';

interface Todo {
  id: number;
  text: string;
}

export default function App() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState('home');

  const addTodo = () => {
    if (!input.trim()) return;

    setLoading(true);

    setTimeout(() => {
      setTodos([...todos, { id: Date.now(), text: input }]);
      setInput('');
      setLoading(false);
    }, 500);
  };

  const deleteTodo = (id: number) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const data = new FormData(e.currentTarget);

    console.log({
      name: data.get('name'),
      email: data.get('email'),
      message: data.get('message')
    });
  };

  return (
    <div style={{ width: 400, margin: '30px auto', fontFamily: 'Arial' }}>

      <nav>
        <button onClick={() => setPage('home')}>Home</button>
        <button onClick={() => setPage('about')}>About</button>
        <button onClick={() => setPage('contact')}>Contact</button>
      </nav>

      <hr />

      {page === 'home' && (
        <>
          <h3>Mani Uzdevumi</h3>

          <div style={{ display: 'flex' }}>
            <input
              value={input}
              onChange={e => setInput(e.target.value)}
              placeholder="Ieraksti uzdevumu..."
              style={{ flex: 1, padding: 8 }}
            />

            <button onClick={addTodo}>
              Pievienot
            </button>
          </div>

          {loading && <Spinner />}

          <ul style={{ padding: 0, listStyle: 'none' }}>
            {todos.map(todo => (
              <TodoItem
                key={todo.id}
                todo={todo}
                onDelete={deleteTodo}
              />
            ))}
          </ul>
        </>
      )}

      {page === 'about' && (
        <>
          <h3>About</h3>
          <p>
            Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...
          </p>

        </>
      )}

      {page === 'contact' && (
        <>
          <h3>Contact</h3>

          <form onSubmit={handleSubmit}>
            <input
              name="name"
              placeholder="Vārds"
              required
            />
            <br /><br />

            <input
              name="email"
              type="email"
              placeholder="E-pasts"
              required
            />
            <br /><br />

            <textarea
              name="message"
              placeholder="Ziņa"
              required
            />
            <br /><br />

            <button type="submit">
              Nosūtīt
            </button>
          </form>
        </>
      )}

    </div>
  );
}

