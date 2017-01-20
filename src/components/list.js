import React, { PropTypes } from 'react'
import Item from './item'
import ListHeader from './list-header'

const List = ({ items, onItemClick }) => (
  <ul>
    {items.map(item =>
      <Item key={item.id}
      {...item}
      onClick={() => onItemClick(item.id)}
      />
    )}
  </ul>
)
