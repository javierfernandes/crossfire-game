import React from 'react'
import ReactPhaser from 'react-phaser-renderer'
import MovingImage from './components/MovingImage.jsx'

ReactPhaser.render(
  <game width="800" height="600">
    <sprite x={100} y={100} name="batman" />

    <MovingImage />
  </game>, 
  document.querySelector('#content')
)

