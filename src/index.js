import React from 'react'
import ReactPhaser from 'react-phaser-renderer'
import MovingImage from './components/MovingImage.jsx'

ReactPhaser.render(
  <game width="800" height="600">
    <scene name="welcome" autoStart={true}>
      <sprite x={100} y={100} name="batman" />
      <MovingImage />
    </scene>
  </game>, 
  document.querySelector('#content')
)

