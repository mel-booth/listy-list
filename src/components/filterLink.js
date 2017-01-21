import { connect } from 'react-redux'
import { setFilter } from '../actions'
import Link from './link'

const mapStateToProps = (state, ownProps) => {
  return {
    active: ownProps.filter === state.visibilityFilter
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClick: () => {
      dispatch(setFilter(ownProps.filter))
    }
  }
}

const FilterLink = connect (
  mapStateToProps,
  mapDispatchToProps
)(Link)

export default FilterLink
