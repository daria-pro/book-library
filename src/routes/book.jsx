import * as React from "react";

import { useParams, useNavigate } from "react-router-dom";
import { getBook } from "../data";

export default function Book() {
  let navigate = useNavigate();
  let params = useParams();
  let book = getBook(parseInt(params.bookId, 10));

  return (
    <main style={{ padding: "1rem" }}>
      <h2>{book.name}</h2>
      <p>{book.amount}</p>
      <p>Жанр: {book.due}</p>
    </main>
  );
}
