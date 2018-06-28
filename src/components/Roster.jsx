import React, {Component} from 'react';
import { withRouter } from 'react-router-dom';

class Roster extends Component {
  constructor(){
    super();
    this.state = {
      players: []
    };
  }

  emptyRoster(){
    this.props.history.push({
      pathname: '/player/new'
    });
  }

  async componentDidMount(){
    const response = await fetch('https://players-api.developer.alchemy.codes/api/players', {
      headers: {
        'Authorization': 'Bearer ' + this.props.getToken()
      }
    });
    const json = await response.json();
    console.log("Sup");
    console.log(this.props.getToken());
    console.log(json);
    const players = json.players;
    if(players.length>0){
      this.setState({players:players});
      //console.log(players[0].first_name);
    }
    //console.log(this.state.players[0].first_name);
  }

  deletePlayer(id,index){
    console.log(id);
    console.log("length " + index);
    let players = this.state.players;
    console.log(players);
    const url = 'https://players-api.developer.alchemy.codes/api/players/' + id;
    fetch(url, {
      method: 'DELETE',
      headers: {
        'Authorization': 'Bearer ' + this.props.getToken()
      }
    }).then((response) => response.json())
    .catch((error) => {
      console.error(error);
    })
    .then((responseJson) => {
      console.log(responseJson);
      if(responseJson.success===true) {
        //this.props.history.push('/roster');
        console.log(responseJson.token);
        //const playerUpdate = this.removeElement(players,index,id);
        console.log("swag");
        for (let i = 0; i<index; i++){
          console.log("id " + players[i].id);
          if(players[i].id===id){
            players.splice(i,1);
            break;
          }
        }
        console.log(players);
        this.setState({players:players});
      }
    });

  }

  removeElement(players,index,id){
    let i =0;
    for(;i<index;i++){
      if(players.id==id){
        players.slice(i,1);
        break;
      }
    }
    return (players);
  }

  render () {

    //console.log("What's good " + this.props.location.state.token);
    //console.log("Players");
    //console.log(this.state.players);
    //console.log(this.state.players.length);
    const listItems = this.state.players.map((d) =>
      <tr key={d.id}>
        <td>{d.first_name}</td>
        <td>{d.last_name}</td>
        <td>{d.rating}</td>
        <td>{d.handedness}</td>
        <td><button class="delete" onClick={(id,index) => this.deletePlayer(d.id,this.state.players.length)}>Delete</button></td>
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
               <th>Delete Player</th>
             </tr>
               {listItems}
          </table>
         <button onClick = {() => this.emptyRoster()}> Click here to add a player</button>
       </div>
      //<listPlayers players = {this.state.players}/>
    );


  }
}

export default withRouter(Roster);
