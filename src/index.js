import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

// GraphQL
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
} from "@apollo/client";

// ReactRouterDom
import { BrowserRouter } from "react-router-dom";

const client = new ApolloClient({
  uri: "https://api-ca-central-1.hygraph.com/v2/clfxlgvl25vi701up6dgf0mti/master",
  cache: new InMemoryCache(),
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </BrowserRouter>
);
