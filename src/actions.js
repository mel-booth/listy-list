export const ADD_ITEM = 'ADD_ITEM'
export const TOGGLE_ITEM = 'TOGGLE_ITEM'
export const SET_FILTER = 'SET_FILTER'

export const Filters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETE: 'SHOW_COMPLETE',
  SHOW_ACTIVE: 'SHOW_ACTIVE'
}

export function addItem (text) {
  return {type: ADD_ITEM, payload: text}
}

export function toggleItem (index) {
  return {type: TOGGLE_ITEM, payload: index}
}

export function setFilter (filter) {
  return { type: SET_FILTER, payload: filter}
}
