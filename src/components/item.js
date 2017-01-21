import React, { PropTypes } from 'react'

const Item = ({onClick, complete, text}) => (
  <li onClick={onClick} style={{textDecoration: complete ? 'line-through' : 'none'}}>
    {text}
  </li>
)

Item.propTypes = {
  onClick: PropTypes.func.isRequired,
  complete: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
}

export default Item
