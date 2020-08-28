import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { BrowserRouter } from 'react-router-dom'

// Redux
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from './redux/rootReducer'
import { Provider } from 'react-redux'

const logger = store => next => action => {
  console.log(1, store.getState())
  const result = next(action)
  console.log(2, store.getState())
  return result
}

const store = createStore(rootReducer, applyMiddleware(thunk, logger))

const app = (
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>
)

ReactDOM.render(app, document.getElementById('root'))
