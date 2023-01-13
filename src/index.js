import React from 'react';
import ReactDOMClient from 'react-dom/client';
import './index.css';
import App from './App';
import { ChakraProvider } from '@chakra-ui/react'
import AuthProvider from './auth/AuthProvider'
import Theme from './theme/theme'

const root = ReactDOMClient.createRoot(document.getElementById('root'))

root.render(
  <React.StrictMode>
    <ChakraProvider theme={Theme}>
      <AuthProvider>
        <App />
      </AuthProvider>
    </ChakraProvider>
  </React.StrictMode>
);