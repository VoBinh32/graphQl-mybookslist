import React from "react";
import { BookList } from "./components/BookList";
import { AddBook } from "./components/AddBook";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "http://localhost:4000/graphql",
  cache: new InMemoryCache(),
});
class App extends React.Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <div id="main">
          <h1>My Reading List</h1>
          <BookList />
          <AddBook />
        </div>
      </ApolloProvider>
    );
  }
}

export default App;
