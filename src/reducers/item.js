const item = (state = {}, action) => {
  switch (action.type) {
    case 'ADD_ITEM':
      return {
        id: action.id,
        text: action.text,
        completed: false
      }
    case 'TOGGLE_ITEM':
      if (state.id !== action.id) {
        return state
      }

      return Object.assign({}, state, {
        completed: !state.completed
      })

    default:
      return state
  }
}

export default item
