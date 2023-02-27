import React from "react";
import ReactDOM from "react-dom/client";
import { ChakraProvider } from "@chakra-ui/react";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

import App from "./App";
import "./index.css";
import "@fontsource/noto-serif";
import "@fontsource/noto-sans";
import theme from "./lib/theme";

const client = new ApolloClient({
  uri: "https://graphql.anilist.co",
  cache: new InMemoryCache(),
});

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <ApolloProvider client={client}>
        <App />
      </ApolloProvider>
    </ChakraProvider>
  </React.StrictMode>
);
