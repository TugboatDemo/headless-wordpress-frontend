import React from "react";
import "./styles.css";
import { ApolloProvider } from "@apollo/client";
import PostsFinder from "./components/postsFinder"
import { client } from "./services/apollo"

export default function App() {
  return (
    <ApolloProvider client={client}>
      <div className="app">
        <h1 className="title">WPGraphQL Posts Finder</h1>
        <PostsFinder />
        <footer><h3>This app was built by following <a href="https://www.youtube.com/watch?v=KZnFoPgctho">this crash course</a> by <a href="https://twitter.com/kellenmace">Kellen Mace</a>.</h3></footer>
      </div>
    </ApolloProvider>
  );
}
