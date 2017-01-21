import { connect } from 'react-redux'
import { toggleItem } from '../actions'
import List from './list'

const getVisibleItems = (items, filter) => {
  switch (filter) {
    case 'SHOW_ALL':
      return items
    case 'SHOW_COMPLETE':
      return items.filter(t => t.complete)
    case 'SHOW_ACTIVE':
      return items.filter(t => !t.complete)
  }
}

const mapStateToProps = (state) => {
  return {
    items: getVisibleItems(state.items, state.visibilityFilter)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onItemClick: (id) => {
      dispatch(toggleItem(id))
    }
  }
}

const VisibleItemList = connect(
  mapStateToProps,
  mapDispatchToProps
)(List)

export default VisibleItemList
