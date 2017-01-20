import React, { PropTypes } from 'react'

const Item = ({onClick, complete, text}) => (
  <li onClick={onCLick} style={{textDecoration: completed ? 'line-through' : 'none'}}>
    {text}
  </li>
)

Item.propTypes = {
  onClick: PropTypes.func.isRequired,
  complete: PropTypes.bool.isREquired,
  text: PropTypes.string.isRequired
}

export default Item
