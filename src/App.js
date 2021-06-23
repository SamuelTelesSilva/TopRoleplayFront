import React from 'react';
import GlobalStyles from './styles/GlobalStyles';
import { AuthProvider } from './providers/auth.js'; 
import {Router} from 'react-router-dom';
import Routes from './routes';
import history from './history';


function App() {
  return (
    <AuthProvider>
       <Router history={history}>
        <Routes />
      </Router>
      <GlobalStyles/>
    </AuthProvider>
  );
}

export default App;
