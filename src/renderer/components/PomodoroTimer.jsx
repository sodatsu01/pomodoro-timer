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
const TICK = 1000;

class PomodoroTimer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      remaining: WORKING_TIME,
      isStart: false,
      isWorking: true,
    };
  }

  handleTick() {
    const { isWorking, remaining } = this.state;
    const nextRemaining = remaining - TICK;
    if (nextRemaining <= 0) {
      this.setState({ isWorking: !isWorking });
      if (isWorking) {
        this.setState({ remaining: BREAK_TIME });
      } else {
        this.setState({ remaining: WORKING_TIME });
      }
    } else {
      this.setState({ remaining: nextRemaining });
    }
  }

  handleStartButtonClicked() {
    const { isStart } = this.state;
    if (!isStart) {
      this.timerId = setInterval(this.handleTick.bind(this), TICK);
    } else {
      clearInterval(this.timerId);
    }
    this.setState({ isStart: !isStart });
  }

  renderTime() {
    const { remaining } = this.state;
    const time = convertMillisecondsToMinSec(remaining);
    return time;
  }

  render() {
    const { isStart } = this.state;
    return (
      <div className="pomodoroTimer">
        <h2 className="timer">{this.renderTime()}</h2>
        <StartButton
          className="startButton"
          isStart={isStart}
          onClick={() => this.handleStartButtonClicked()}
        />
      </div>
    );
  }
}
export default PomodoroTimer;
