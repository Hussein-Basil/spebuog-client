import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { ChakraProvider } from '@chakra-ui/react'
import AuthProvider from './auth/AuthProvider'
import Theme from './theme/theme'

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider theme={Theme}>
      <AuthProvider>
        <App />
      </AuthProvider>
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById('root')
);