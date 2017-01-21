import item from './item'

const items = (state = [], action) => {
  switch (action.type) {
    case 'ADD_ITEM':
      return [
        ...state,
        item(state, action)
      ]
    case 'TOGGLE_ITEM':
      return state.map(t =>
        item(state, action)
      )
    default:
      return state
  }
}

export default items
