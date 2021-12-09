import * as React from "react";

import { useParams, useNavigate } from "react-router-dom";
import { getAuthor } from "../data";

export default function Author() {
  let navigate = useNavigate();
  let params = useParams();
  let author = getAuthor(parseInt(params.authorId, 10));

  return (
    <main style={{ padding: "1rem" }}>
      <h2>{author.name}</h2>
      <p>
        {author.name}: {author.number}
      </p>
    </main>
  );
}
