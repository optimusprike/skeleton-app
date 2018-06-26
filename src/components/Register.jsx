import React, {Component} from 'react';
import { withRouter } from "react-router-dom";

class Register extends Component {
  constructor(){
    super();
    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: ""
    };
  }

  createAccount(event){
    if(this.state.password==this.state.confirmPassword){
      console.log("Worked");
      fetch('https://players-api.developer.alchemy.codes/api/user', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          first_name: this.state.firstName,
          last_name: this.state.lastName,
          email: this.state.email,
          password: this.state.password,
          confirm_password: this.state.confirmPassword
        })
      }).then((response) => response.json())
      .catch((error) => {
        console.error(error);
      })
      .then((responseJson) => {
        console.log(responseJson);
        if(responseJson.success===true) {
          //this.props.history.push('/roster');
          console.log(responseJson.token);
          this.props.setToken(responseJson.token);
          console.log("hi " + this.props.getToken());
          this.props.history.push({
            pathname: '/roster'
          });
        }
      });
      //this.props.history.push('/roster');
    }
    else{
      console.log("didn't work");
    }
  }

  inputChange(event){
    this.setState({[event.target.id]:event.target.value});
  }

 render () {
   return (
     <div>
       <h1>Create an account</h1>
       <p>First Name</p>
       <input id="firstName" type="text" value = {this.state.firstName} onChange={(event) => this.inputChange(event)} />
       <p>Last Name</p>
       <input id="lastName" type="text" value = {this.state.lastName} onChange={(event) => this.inputChange(event)} />
       <p>Email</p>
       <input id="email" type="email" value = {this.state.email} onChange={(event) => this.inputChange(event)} />
       <p>Password</p>
       <input id="password" type="password" onChange={(event) => this.inputChange(event)} />
       <p>Confirm Password</p>
       <input id="confirmPassword" type="password" onChange={(event) => this.inputChange(event)} />
       <p>Register</p>
       <button id="register" onClick={() => this.createAccount()}>Click to Create</button>
     </div>
   );
  }
}

export default withRouter(Register);
// <Link to="/roster"><button onClick={() => this.createAccount()}>Click to Create</button></Link>
//<button onClick = {() => this.createAccount()} id="register" type="submit"/>
