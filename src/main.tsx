import './index.css';

import {
  ApolloClient,
  ApolloProvider,
  createHttpLink,
  InMemoryCache,
} from '@apollo/client';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import React from 'react';
import ReactDOM from 'react-dom';

import theme from '@/style/theme';

import App from './App';

const httpLink = createHttpLink({
  uri: 'http://localhost:4000',
});

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <App />
      </ThemeProvider>
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
