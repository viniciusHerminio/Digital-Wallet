import React from 'react';
import { Route } from 'react-router-dom';
import Login from './pages/Login';
import Wallet from './pages/Wallet';

function App() {
  return (
    <div>
      <Route component={ Login } path="/" exact />
      <Route component={ Wallet } path="/carteira" />
    </div>
  );
}

export default App;
