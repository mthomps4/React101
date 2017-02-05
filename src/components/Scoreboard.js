import React from 'react';
import Header from './header.jsx';
import Player from './player.jsx';

const App = (props) =>
  <div className="scoreboard">
    <Header title={props.title}/>

    <div className="players">
      {props.players.map(function(player){
        return <Player name={player.name} score={player.score} key={player.id}/>
      })}
    </div>

  </div>
  ;

  App.propTypes = {
    title: React.PropTypes.string,
    players: React.PropTypes.arrayOf(React.PropTypes.shape({
      name: React.PropTypes.string.isRequired,
      score: React.PropTypes.number.isRequired,
      id: React.PropTypes.number.isRequired
    })).isRequired
  };

  App.defaultProps = {
    title: "Scoreboard"
  };

export default App;
