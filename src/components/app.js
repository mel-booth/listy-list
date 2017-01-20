import React from 'react'
import List from './list'

const list = [
  {
    item: 'make dat money money',
    isComplete: false
  },
  {
    item: 'work, work, work, work, work',
    isComplete: true
  }
]

export default class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Listy List</h1>
        <List />
      </div>
    )
  }
}
