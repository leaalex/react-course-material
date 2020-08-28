import { ADD, SUB, ADD_NEW_TASK } from './actionTypes'

export const sub = () => ({ type: SUB })
export const add = () => ({ type: ADD })

export const addNewTask = (value) => ({ type: ADD_NEW_TASK, value })
