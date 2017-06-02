import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import NumberList from './NumberList';
import PlayTimer from './PlayTimer';

const boardStyle = {
  width: "90%",
  margin: "auto"
};

class GameBoard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      displayNumBoard: false,
      playInProgress: false,
      playBtnText: 'Play'
    };
    this.showNumberBoard = this.showNumberBoard.bind(this);
  }

  showNumberBoard() {
    this.setState({displayNumBoard: true, playBtnText: 'Try Again'});
    this._timer.startTimer();
  }

  updatePlayStatus(playInProgress) {
    this.setState({playInProgress: playInProgress});
  }

  render() {
    return (
      <div style={boardStyle}>
        <div style={this.state.playInProgress ? {display: "none"} : {}}>
          <Button style={{margin: "1em"}} bsStyle="primary" bsSize="large" onClick={this.showNumberBoard}>
            {this.state.playBtnText}
          </Button>
        </div>
        <div style={this.state.displayNumBoard ? {} : { display: "none" }}>
          <PlayTimer ref={(timer) => { this._timer = timer; }} updatePlayStatus={this.updatePlayStatus.bind(this)} />
          <NumberList enableBtns={this.state.playInProgress}/>
        </div>
      </div>
    );
  }
}

export default GameBoard;
