"use client";
import Image from "next/image";
import styles from "./page.module.css";
import CharacterList from "../components/CharacterList";
import React, { useState } from "react";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";

export default function Home() {
  return <h1>Hi</h1>;
}
