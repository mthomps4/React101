import React from 'react';
import ReactDOM from 'react-dom';
require('./index.html');
import "./css/app.css";
import "./css/main.css";

import {AppContainer} from 'react-hot-loader';
import App from './components/Scoreboard.js';

import myPlayers from './components/PLAYERS.js';
var playerList = myPlayers();

// Create app
const container = document.querySelector('#appContainer');

// Render app
ReactDOM.render(
  <AppContainer>
    <App players={playerList}/>
  </AppContainer>
  , container
);

// Hot module reloading
if (module.hot) {
  module.hot.accept('./components/Scoreboard.js', () => {
    ReactDOM.render(
      <AppContainer>
        <App />
      </AppContainer>
      , container
    );
  });
}
