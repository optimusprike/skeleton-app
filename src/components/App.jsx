import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Login from './Login';
import Register from './Register';
import Home from './Home';
import Roster from './Roster';
import newPlayer from './newPlayer';

/*const App = () => (
  <BrowserRouter>
    <Switch>
      <Route path='/login' component= { Login } />
      <Route path='/register' component= { Register } />
      <Route path='/roster' component= { Roster } />
      <Route path='/player/new' component= { newPlayer } />
      <Route exact path='/' component= { Home } />
    </Switch>
  </BrowserRouter>
);

export default App;*/

//import React from 'react'
//import PropTypes from 'prop-types'

class App extends Component {
  constructor(){
    super();
    this.state = {
      token: ""
    };
  }
  setToken(token){
    this.setState({token: token});
  }
  getToken(){
    return this.state.token;
  }
  render () {
    return(
    <BrowserRouter>
      <Switch>
        <Route path='/login' render={() => <Login getToken = { token => this.getToken() } setToken={token => this.setToken(token)}/> } />
        <Route path='/register' render={() => <Register getToken = { token => this.getToken() } setToken={token => this.setToken(token)}/> } />
        <Route path='/roster' render={() => <Roster getToken = { token => this.getToken() } setToken={token => this.setToken(token)}/> } />
        <Route path='/player/new' render={() => <newPlayer getToken = { token => this.getToken() } setToken={token => this.setToken(token)}/> } />
        <Route exact path='/' render={() => <Home getToken = { token => this.getToken() } setToken={token => this.setToken(token)}/> } />
      </Switch>
    </BrowserRouter>
  );
  }
}

export default App;
