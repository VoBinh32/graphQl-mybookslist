import React, { useState } from "react";
import { useQuery, useMutation } from "@apollo/client";
import { getBookQuery } from "../queries/queries";

export const BookDetail = (props) => {
  const { loading, error, data } = useQuery(getBookQuery, {
    variables: { id: props.bookId },
  });

  let book = null;
  if (data) {
    book = data.book;
  }
  if (error) {
    return "error"; // blocks rendering
  }

  return (
    <div id="book-details">
      {book && (
        <div>
          <h2>{book.name}</h2>
          <p>{book.genre}</p>
          <p>{book.author.name}</p>
          <p>All books by this author:</p>
          <ul className="other-books">
            {book.author.books.map((item) => {
              return <li key={item.id}>{item.name}</li>;
            })}
          </ul>
        </div>
      )}
    </div>
  );
};
