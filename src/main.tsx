import React from "react";
import ReactDOM from "react-dom/client";
import { ChakraProvider } from "@chakra-ui/react";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { Provider as JotaiProvider } from "jotai";

import App from "./App";
import "./index.css";
import "@fontsource/lato/300.css";
import "@fontsource/lato/700.css";
import "@fontsource/noto-sans";
import "@fontsource/noto-sans-jp";
import theme from "./lib/theme";
import ScrollToTop from "./components/util/ScrollToTop";
import { BrowserRouter } from "react-router-dom";

const client = new ApolloClient({
  uri: "https://graphql.anilist.co",
  cache: new InMemoryCache(),
});

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <ApolloProvider client={client}>
        <JotaiProvider>
          <BrowserRouter>
            <ScrollToTop />
            <App />
          </BrowserRouter>
        </JotaiProvider>
      </ApolloProvider>
    </ChakraProvider>
  </React.StrictMode>
);
