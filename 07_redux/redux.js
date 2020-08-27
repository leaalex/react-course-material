const redux = require('redux')

const initialState = {
  counter: 0
}
// Reducer
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD' :
      return { counter: state.counter + 1 }
    case 'SUB' :
      return { counter: state.counter - 1 }
    case 'ADD_NUMBER' :
      return { counter: state.counter + action.value }
  }

  return state
}
// Store
const store = redux.createStore(reducer)

store.subscribe(() => {
  console.log('subscribe', store.getState())
})

// Action
console.log('#1', store.getState())

store.dispatch({ type: 'ADD' })
console.log('#2', store.getState())

store.dispatch({ type: 'SUB' })
console.log('#3', store.getState())

store.dispatch({ type: 'ADD_NUMBER', value: 12 })
console.log('#4', store.getState())
