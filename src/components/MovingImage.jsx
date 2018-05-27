import React from 'react'

export default class MovingImage extends React.Component {
  state = {
    x: 100,
  }
  move = () => {
    this.setState(prev => ({ x: prev.x + 50 }))
  }
  render() {
    const { x } = this.state
    return (
      <image x={x} y={300} name="robin" displayWidth={80} displayHeight={80} onClick={this.move} />
    )
  }
}