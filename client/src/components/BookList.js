import React, { useState } from "react";
import { useQuery } from "@apollo/client";
import { getBooksQuery } from "../queries/queries";
import { BookDetail } from "./BookDetails";

export function BookList() {
  const [selected, setSelected] = useState(null);
  const { loading, error, data } = useQuery(getBooksQuery);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <div>
      <ul id="book-list">
        {data.books.map(({ name, id }) => (
          <li key={id} onClick={(e) => setSelected(id)}>
            {name}
          </li>
        ))}
      </ul>
      <BookDetail bookId={selected} />
    </div>
  );
}
