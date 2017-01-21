import item from './item'
import VisibleItemList from '../containers/visibleItemList'

const items = (state = [], action) => {
  switch (action.type) {
    case 'ADD_ITEM':
      return [
        ...state,
        item(undefined, action)
      ]
    case 'TOGGLE_ITEM':
      return state.map(t =>
        item(t, action)
      )
    default:
      return state
  }
}

export default items
