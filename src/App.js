import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from './pages/Login';
import Wallet from './pages/Wallet';

function App() {
  return (
    <div>
      <div>Hello,TrybeWallet!</div>
      <Switch>
        <Route exact path="/">
          <Login />
        </Route>
        <Route path="/carteira">
          <Wallet />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
