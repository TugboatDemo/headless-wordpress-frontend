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
      </div>
    </ApolloProvider>
  );
}
