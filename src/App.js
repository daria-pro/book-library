import * as React from 'react';
import { Outlet, Link } from 'react-router-dom';

export default function App() {
  return (
    <div>
      <h1>Книги</h1>
      <nav style={{ borderBottom: 'solid 1px', paddingBottom: '1rem' }}>
        <Link to="/books">Список книг</Link> |{' '}
        <Link to="/authors">Список авторів</Link> |{' '}
        <Link to="/genres">Жанри</Link>
      </nav>
      <Outlet />
    </div>
  );
}
