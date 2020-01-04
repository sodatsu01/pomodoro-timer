import React, { Component } from 'react';
import StartButton from './StartButton';

function convertMillisecondsToMinSec(milliseconds) {
  const minutes = Math.floor(milliseconds / 60000);
  const seconds = Math.floor((milliseconds - minutes * 60000) / 1000);
  const mm = (`00${minutes}`).slice(-2);
  const ss = (`00${seconds}`).slice(-2);
  return `${mm}:${ss}`;
}

const WORKING_TIME = 1500000; // milliseconds
const BREAK_TIME = 300000; // milliseconds

class PomodoroTimer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      remaining: WORKING_TIME,
    };
  }

  handleTick() {
    const currentTime = Date.now();
    const elapsed = currentTime - this.prevTime;
    const { remaining } = this.state;
    const nextRemaining = remaining - elapsed;

    if (nextRemaining <= 0) {
      this.setState({ remaining: BREAK_TIME });
    } else {
      this.prevTime = currentTime;
      this.setState({ remaining: nextRemaining });
    }
  }

  handleStart() {
    this.prevTime = Date.now();
    this.timerId = setInterval(this.handleTick.bind(this), 1000);
  }

  render() {
    const { remaining } = this.state;
    const time = convertMillisecondsToMinSec(remaining);
    return (
      <div>
        <h3>{time}</h3>
        <StartButton onClick={this.handleStart()}>test</StartButton>
      </div>
    );
  }
}
export default PomodoroTimer;
