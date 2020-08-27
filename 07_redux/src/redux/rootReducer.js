import { combineReducers } from 'redux'
import counterReducer from './reducers/counterReducer'
import taskReducer from './reducers/taskReducer'

export default combineReducers({ counterReducer, taskReducer })
