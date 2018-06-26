import React, {Component} from 'react';

class Roster extends Component {
  constructor(){
    super();
    this.state = {
      players: []
    };
  }

  emptyRoster(){
    this.props.history.push({
      pathname: '/player/new',
      state: { token: this.props.location.state.token }
    });
  }

  async componentWillMount(){
    const response = await fetch('https://players-api.developer.alchemy.codes/api/players', {
      headers: {
        'Authorization': 'Bearer ' + this.props.location.state.token
      }
    });
    const json = await response.json();
    console.log("Sup");
    console.log(json);
    let players = json.players;
    if(json.players.length>0){
      this.setState({players:players});
      console.log(this.state.players[0].first_name);
    }
    //console.log(this.state.players[0].first_name);
  }

  render () {
    
    console.log("What's good " + this.props.location.state.token);
    console.log("Players");
    console.log(this.state.players);
    const listItems = this.state.players.map((d) =>
      <tr key={d.id}>
        <td>{d.first_name}</td>
        <td>{d.last_name}</td>
        <td>{d.rating}</td>
        <td>{d.handedness}</td>
      </tr>);
    //console.log("What's good " + this.state.players[0].first_name);
    return(
       <div>
         <h1>Roster</h1>
           <table>
             <tr>
               <th>First Name</th>
               <th>Last Name</th>
               <th>Rating</th>
               <th>Handedness</th>
             </tr>
               {listItems}
          </table>
         <button onClick = {() => this.emptyRoster()}> Click here to add a player</button>
       </div>
      //<listPlayers players = {this.state.players}/>
    );


  }
}

export default Roster;
