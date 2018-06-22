import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Login from './Login';
import Register from './Register';
import Home from './Home';

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route path='/login' component= { Login } />
      <Route path='/register' component= { Register } />
    </Switch>
  </BrowserRouter>
);

export default App;
