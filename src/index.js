import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import "./font/BasierCircle-Regular.ttf"
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  HttpLink,
  from,
} from "@apollo/client";
import { onError } from "@apollo/client/link/error";
import { store } from './redux/store';
import { Provider } from "react-redux";

const errorLink = onError(({ graphqlErrors, networkError }) => {
  if (graphqlErrors) {
    graphqlErrors.map(({ message, location, path }) => {
      alert(`Graphql error ${message}`);
    });
  }
});
const link = from([
  errorLink,
  new HttpLink({ uri: "https://api.ss.dev/resource/api" }),
]);
const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: link,
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <BrowserRouter>
  <Provider store={store}>
  <ApolloProvider client={client}>
  
    <App />
    
    </ApolloProvider>
    </Provider>
    </BrowserRouter>
  </React.StrictMode>
);

