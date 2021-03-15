import React, { useState } from "react";
import { useQuery, useMutation } from "@apollo/client";
import { getAuthorsQuery, addBookMutation } from "../queries/queries";

export const AddBook = () => {
  const [name, setName] = useState("");
  const [genre, setGenre] = useState("");
  const [authorId, setAuthorId] = useState("");
  const [addBook] = useMutation(addBookMutation);
  const submitForm = (e) => {
    e.preventDefault();
    addBook({ variables: { name, genre, authorId } });
  };

  const { loading, error, data } = useQuery(getAuthorsQuery);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <form id="add-book" onSubmit={submitForm}>
      <div className="field">
        <label>Book name:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.currentTarget.value)}
        />
      </div>
      <div className="field">
        <label>Genre:</label>
        <input
          type="text"
          value={genre}
          onChange={(e) => setGenre(e.currentTarget.value)}
        />
      </div>
      <div className="field">
        <label>Author:</label>
        <select onChange={(e) => setAuthorId(e.currentTarget.value)}>
          <option>Select author</option>

          {data.authors.map(({ name, id }) => (
            <option key={id} value={id}>
              {name}
            </option>
          ))}
        </select>
      </div>
      <button>+</button>
    </form>
  );
};
