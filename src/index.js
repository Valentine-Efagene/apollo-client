import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
} from "@apollo/client";
import dotenv from 'dotenv'

dotenv.config()

const client = new ApolloClient({
  uri: process.env.REACT_APP_GRAPHQL_URL || 'https://48p1r2roz4.sse.codesandbox.io',
  cache: new InMemoryCache()
});

// const client = ...

/*client
  .query({
    query: gql`
      query GetRates {
        rates(currency: "USD") {
          currency
        }
      }
    `
  })
  .then(result => console.log(result));

*/

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>    <App />  </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
