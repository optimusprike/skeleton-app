import React, { Component } from 'react';

export default class Login extends Component{

  constructor() {
    super();
    this.state = {
      email: "Prakash"
    };
  }

  loginSubmit(event){
    if(this.state.email=="Prakash"){
      console.log("pass");
    }
    else{
      console.log("fail");
    }
  }

  inputChange(event){
    this.setState({email:event.target.value});
  }

  render(){
      return(
        <form onSubmit={() => this.loginSubmit()}>
          <p>Log in to your account</p>
          <input class="email" type="text" onChange={() => this.inputChange()} placeholder="jane@doe.com"/>
          <button class="submit" onClick={() => this.loginSubmit()}/>
        </form>
      );
  }
}




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
