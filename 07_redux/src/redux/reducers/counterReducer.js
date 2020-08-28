import { ADD, SUB } from '../actions/actionTypes'

const initialState = {
  counter: 10
}

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD :
      return { counter: state.counter + 1 }
    case SUB :
      return { counter: state.counter - 1 }
  }
  return state
}

export default counterReducer
