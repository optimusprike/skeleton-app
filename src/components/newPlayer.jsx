import React , { Component } from 'react';

// const newPlayer = () => {
//   return (
//     <p>What's good</p>
//   )
// }
//
// export default newPlayer;

class newPlayer extends Component {
  constructor(){
    super();
    this.state = {
      firstName: "",
      lastName: "",
      rating: "",
      handedness: ""
    };
  }

  createPlayer(){
    fetch('https://players-api.developer.alchemy.codes/api/players', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + this.props.location.state.token
      },
      body: JSON.stringify({
        first_name: this.state.firstName,
        last_name: this.state.lastName,
        rating: this.state.rating,
        handedness: this.state.handedness
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
        this.props.history.push({
          pathname: '/roster',
          state: { token: this.props.location.state.token }
        });
      }
    });

  }

  inputChange(event){
    this.setState({[event.target.id]:event.target.value});
  }


  render () {
    console.log("New Player page " + this.props.location.state.token);
    return(
      <div>
        <p>First Name</p>
        <input id="firstName" type="text" value = {this.state.firstName} onChange={(event) => this.inputChange(event)} />
        <p>Last Name</p>
        <input id="lastName" type="text" value = {this.state.lastName} onChange={(event) => this.inputChange(event)} />
        <p>Rating</p>
        <input id="rating" type="text" value = {this.state.rating} onChange={(event) => this.inputChange(event)} />
        <p>Handedness</p>
        <input id="handedness" type="text" value = {this.state.handedness} onChange={(event) => this.inputChange(event)} />
        <p>Create Player</p>
        <button id="register" onClick={() => this.createPlayer()}>Click to Create</button>
      </div>
    );

  }
}

export default newPlayer;
