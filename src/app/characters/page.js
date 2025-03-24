
"use client"
import React from "react";
import CharacterList from "@/components/CharacterList";
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "https://rickandmortyapi.com/graphql",
  cache: new InMemoryCache(),
});

export default function CharactersPage() {
  return (
      <ApolloProvider client={client}>
        <CharacterList />      
    </ApolloProvider>
  );
}
