import React from 'react'
import ReactPhaser from 'react-phaser-renderer'

ReactPhaser.render(
  <game width="270" height="480">
    <sprite x={100} y={100} name="batman" /> 
  </game>, 
  document.querySelector('#content')
)
