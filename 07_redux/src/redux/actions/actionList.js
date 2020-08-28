import { ADD, SUB } from './actionTypes'

export const sub = () => ({ type: SUB })
export const add = () => ({ type: ADD })

export const addTimeout = () => (dispatch) => setTimeout(() => {
  dispatch(add())
}, 3000)
