import React, { PropTypes } from 'react'

const Item = ({onClick, complete, text}) => (
  <li onClick={onCLick} style={{textDecoration: completed ? 'line-through' : 'none'}}>
    {text}
  </li>
)
