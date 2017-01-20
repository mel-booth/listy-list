import { ADD_ITEM, TOGGLE_ITEM, SET_FILTER, Filters } from './actions'

function list(state = [], action) {
  switch (action.type) {
    case ADD_ITEM:
      return [
        ...state,
        {
          text: action.text,
          complete: false
        }
      ]
    case TOGGLE_ITEM:
      return state.map((item, index) => {
        if (index === action.index) {
          return Object.assign({}, item, {
            complete: !item.complete
          })
        }
        return item
      })
      default:
        return state
  }
}
