import React from 'react';
import Header from './header.jsx';
import Player from './player.jsx';


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

  render: function() {
    return(
        <div className="scoreboard">
          <Header title={this.props.title}/>

          <div className="players">
            {this.state.players.map(function(player){
              return <Player name={player.name} score={player.score} key={player.id}/>
            })}
          </div>
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
