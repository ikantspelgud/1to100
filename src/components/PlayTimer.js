import React, { Component } from 'react';

const timerStyle = {
  fontSize: "2em",
  fontWeight: "bold",
  marginBottom: ".4em"
};

class PlayTimer extends Component {
  constructor(props) {
    super(props);

    this.totalSeconds = 240;
    this.state = { secRemaining: this.totalSeconds, startDate: null };
  }

  startTimer() {
    this.setState({ startDate: new Date() });
    this.props.updatePlayStatus(true);
    this.timer = setInterval(() => this.updateTimer(), 500);
  }

  updateTimer() {
    let secRemaining = this.totalSeconds - Math.floor((new Date() - this.state.startDate)/1000);

    this.setState({secRemaining});
    if (secRemaining <= 0) {
      // Disable the button board and stop the timer; the render function
      // will also show a message that the time is up
      this.props.updatePlayStatus(false);
      this.stopTimer();
    }
  }

  stopTimer() {
    // TODO call stopTimer when they click the wrong number or when they win
    clearInterval(this.timer);
  }

  render() {
    const secRemaining = this.state.secRemaining,
      mins = Math.floor(secRemaining/60),
      secs = (secRemaining % 60);

    return (
      <div style={{...timerStyle, color: secRemaining < 60 ? "red" : "black"}}>
        {secRemaining <= 0 ? "Time is up!" : (mins + ":" + (secs < 10 ? "0" : "") + secs)}
      </div>
    );
  }
}

export default PlayTimer;
