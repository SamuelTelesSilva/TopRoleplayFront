import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { AuthProvider } from './providers/auth';
import { CookiesProvider } from 'react-cookie';

ReactDOM.render(
  <CookiesProvider>
    <AuthProvider>
      <App />
    </AuthProvider>
  </CookiesProvider>,
  document.getElementById('root')
);
