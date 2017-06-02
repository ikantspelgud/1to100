import React, { Component } from 'react';
import GameBoard from './components/GameBoard';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h1>1 to 100</h1>
        </div>
        <GameBoard />
      </div>
    );
  }
}

export default App;
