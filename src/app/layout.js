"use client"
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// export const metadata = {
//   title: "Rick and Morty",
//   description: "Generated by create next app",
// };
const client = new ApolloClient({
  uri: "https://rickandmortyapi.com/graphql",
  cache: new InMemoryCache(),
});
export default function RootLayout({ children }) {
  return (
    // <html lang="en">
    //   <body className={`${geistSans.variable} ${geistMono.variable}`}>
    //     {children}
    //   </body>
    // </html>
    <ApolloProvider client={client}>
      <html lang="en">
        <body className={`${geistSans.variable} ${geistMono.variable}`}>
          {children}
        </body>
      </html>
    </ApolloProvider>
  );
}
