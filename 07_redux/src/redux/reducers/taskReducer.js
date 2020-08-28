import { ADD_TASKS } from '../actions/actionTypes'

const initialState = { taskList: [] }

const taskReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TASKS: return { taskList: [...state.taskList, ...action.value] }
  }
  return state
}

export default taskReducer
