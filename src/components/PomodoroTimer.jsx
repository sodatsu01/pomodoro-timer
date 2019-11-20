import React, { Component } from 'react';

class PomodoroTimer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      startTime: '25:00',
    };
  }

  render() {
    const { startTime } = this.state;
    return (
      <div>{startTime}</div>
    );
  }
}

export default PomodoroTimer;
