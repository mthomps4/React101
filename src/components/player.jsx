import React from 'react';
import Counter from './counter.jsx';

const Player = (props) =>
    <div className="player">
      <div className="player-name">{props.name}</div>

      <div className="player-score">
        <Counter /> 
      </div>
    </div>
;

Player.propTypes = {
  name: React.PropTypes.string.isRequired,
  score: React.PropTypes.number.isRequired
}

export default Player;
