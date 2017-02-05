import React from 'react';
import Header from './header.jsx';
import Player from './player.jsx';
import AddPlayerForm from './addPlayer.jsx';

var nextId=4; //Player Id Key ++ each addition

var App = React.createClass({
  propTypes: {
    title: React.PropTypes.string,
    initialPlayers: React.PropTypes.arrayOf(React.PropTypes.shape({
      name: React.PropTypes.string.isRequired,
      score: React.PropTypes.number.isRequired,
      id: React.PropTypes.number.isRequired
    })).isRequired
  },

  getDefaultProps: function() {
    return{
      title: "Scoreboard"
    }
  },

  getInitialState: function(){
    return {
      players: this.props.initialPlayers,
    };
  },

  onScoreChange: function(index, delta){
    console.log('onScoreChange', index, delta);
    this.state.players[index].score += delta;
    this.setState(this.state);
  },

  onPlayerAdd: function(name){
    console.log('player added', name);
    this.state.players.push({
      name: name,
      score: 0,
      id: nextId,
    });
    this.setState(this.state);
    nextId +=1;
  },

  onRemovePlayer: function(index){
    this.state.players.splice(index, 1);
    this.setState(this.state);
  },

  render: function() {
    return(
        <div className="scoreboard">
          <Header title={this.props.title} players={this.state.players}/>

          <div className="players">
            {this.state.players.map(function(player, index){
              return(
                <Player
                  onScoreChange={function(delta) {this.onScoreChange(index,delta)}.bind(this)}
                  onRemove={function(){this.onRemovePlayer(index)}.bind(this)}
                  name={player.name}
                  score={player.score}
                  key={player.id}/>
              );
            }.bind(this))}
          </div>

          <AddPlayerForm onAdd={this.onPlayerAdd}/>

        </div>
      );
  }
});

// const App = (props) =>
//   <div className="scoreboard">
//     <Header title={props.title}/>
//
//     <div className="players">
//       {props.players.map(function(player){
//         return <Player name={player.name} score={player.score} key={player.id}/>
//       })}
//     </div>
//
//   </div>
//   ;

  // App.propTypes = {
  //   title: React.PropTypes.string,
  //   players: React.PropTypes.arrayOf(React.PropTypes.shape({
  //     name: React.PropTypes.string.isRequired,
  //     score: React.PropTypes.number.isRequired,
  //     id: React.PropTypes.number.isRequired
  //   })).isRequired
  // };
  //
  // App.defaultProps = {
  //   title: "Scoreboard"
  // };

export default App;
