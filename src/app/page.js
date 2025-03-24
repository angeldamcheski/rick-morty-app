"use client";
import Image from "next/image";
import styles from "./page.module.css";
import CharacterList from "../components/CharacterList";
import React, { useState } from "react";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import {redirect} from "next/navigation"
export default function Home() {
  redirect("/characters");
}
