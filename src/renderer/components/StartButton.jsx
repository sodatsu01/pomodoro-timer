import React, { Component } from 'react';
import Button from '@material-ui/core/Button';

class StartButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      play: 'start',
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState((state) => ({
      play: !state.play,
    }));
  }

  render() {
    const message = (state) => (state.play ? 'stop' : 'start');
    return (
      <Button variant="contained" color="primary" className="start" onClick={this.handleClick}>
        {message(this.state)}
      </Button>
    );
  }
}

export default StartButton;
