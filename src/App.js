import React from 'react';
import GlobalStyles from './styles/GlobalStyles';
import { AuthProvider } from './providers/auth.js'; 
import Routes from './routes';

function App() {
  return (
    <AuthProvider>
      <Routes />
      <GlobalStyles/>
    </AuthProvider>
  );
}

export default App;
