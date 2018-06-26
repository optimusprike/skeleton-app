import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

class Login extends Component{

  constructor() {
    super();
    //this.home = this.home.bind(this);
    this.state = {
      email: "",
      password:""

    };
  }

  loginSubmit(){
    console.log(this.state.email);
    console.log(this.state.password);
    fetch('https://players-api.developer.alchemy.codes/api/login', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: this.state.email,
        password: this.state.password,
      })
    }).then((response) => response.json())
    .catch((error) => {
      console.error(error);
    })
    .then((responseJson) => {
      console.log(responseJson);
      if(responseJson.success===true){
        //this.props.history.push('/roster');
        console.log(responseJson.token);
        this.props.setToken(responseJson.token);
        console.log(this.props.getToken());
        console.log(this.props);
        this.props.history.push({
          pathname: '/roster'
        });
      }
    });
  }

  inputChange(event){
    this.setState({[event.target.id]:event.target.value});
  }

  render(){
      return(
        <div>
          <p>Log in to your account</p>
          <p>Email</p>
          <input id="email" type="email" name="email" value = {this.state.email} onChange={(event) => this.inputChange(event)} placeholder="jane@doe.com"/>
          <p>Password</p>
          <input id="password" name="password" type="password" onChange={(event) => this.inputChange(event)}/>
          <button id="login" onClick={() => this.loginSubmit()}/>
        </div>
      );
  }
}


export default withRouter(Login);

/*
const Login= () => (
  <form onSubmit={this.loginSubmit}>
    <p>Log in to your account</p>
    <input class="email" type="text" onChange={this.inputChange} placeholder="jane@doe.com"/>
    <input class="submit" type="submit"/>
  </form>
);

export default Login;*/
/*{<input class="password" type="password"/>}*/
