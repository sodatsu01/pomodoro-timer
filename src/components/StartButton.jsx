import React, { Component } from 'react'
import Button from '@material-ui/core/Button'

class StartButton extends Component {
  constructor(props) {
    super(props)
    this.state = {
      play: false
    }
  }
  render() {
    return (
      <Button variant="contained" className='start'>
      </Button>
    )
  }
}

export default StartButton
