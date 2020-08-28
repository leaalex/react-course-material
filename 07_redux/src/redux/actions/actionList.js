import { ADD, SUB, ADD_TASKS } from './actionTypes'
import axios from 'axios'

export const sub = () => ({ type: SUB })
export const add = () => ({ type: ADD })
export const addTask = (value) => ({ type: ADD_TASKS, value })

export const addTaskAsync = () => (dispatch) =>
  fetch('https://jsonplaceholder.typicode.com/todos/')
    .then(response => response.json())
    .then(json => dispatch(addTask(json)))
