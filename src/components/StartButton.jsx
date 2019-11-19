import React, { Component } from 'react'
import Button from '@material-ui/core/Button'

class StartButton extends Component {
  constructor(props) {
    super(props)
    this.state = {
      play: false
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    this.setState(state =>({
      play: !state.play
    }))
  }
    
  render() {
    return (
      <Button variant='contained' color='primary' className='start' onClick={this.handleClick}>
        {this.state.play ? "stop" : "start"}
      </Button>
    )
  }
}

export default StartButton
