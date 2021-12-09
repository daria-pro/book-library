import * as React from "react";
import * as ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Author from "./routes/book";
import Authors from "./routes/authors";
import Books from "./routes/books";
import Book from "./routes/book";
import "./App.css";

const rootElement = document.getElementById("app");
ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="authors" element={<Authors />}>
          <Route
            index
            element={
              <main style={{ padding: "1rem" }}>
                <p>Оберіть автора</p>
              </main>
            }
          />
          <Route path=":authorId" element={<Author />} />
        </Route>
        <Route path="books" element={<Books />}>
          <Route
            index
            element={
              <main style={{ padding: "1rem" }}>
                <p>Оберіть книгу</p>
              </main>
            }
          />
          <Route path=":bookId" element={<Book />} />
        </Route>
        <Route
          path="*-"
          element={
            <main style={{ padding: "1rem" }}>
              <p>There's nothing here!</p>
            </main>
          }
        />
      </Route>
    </Routes>
  </BrowserRouter>,
  rootElement
);
