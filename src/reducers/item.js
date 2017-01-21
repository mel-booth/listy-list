const item = (state = {}, action) => {
  switch (action.type) {
    case 'ADD_ITEM':
      return {
        id: action.id,
        text: action.text,
        complete: false
      }
    case 'TOGGLE_ITEM':
      if (state.id !== action.id) {
        return state
      }

      return Object.assign({}, state, {
        complete: !state.complete
      })

    default:
      return state
  }
}

export default item
