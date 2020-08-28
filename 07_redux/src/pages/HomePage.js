import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { add, sub } from '../redux/actions/actionList'

const HomePage = (props) => {
  const [counter, setCount] = useState(0)
  useEffect(() => console.log('render'))
  return (
    <React.Fragment>
      <h1>{props.title}</h1>
      <div className="card">
        <div className="card-body text-center">
          <h1 className={'display-1'}>{counter}</h1>
          <div className="btn-group" role="group" aria-label="Basic example">
            <button type="button" className="btn btn-success" onClick={() => setCount(counter + 1)}>+1</button>
            <button type="button" className="btn btn-danger" onClick={() => setCount(counter - 1)}>-1</button>
          </div>
          <h1 className={'display-4'}>{props.counter}</h1>
          <div className="btn-group" role="group" aria-label="Basic example">
            <button type="button" className="btn btn-success" onClick={props.addCounter}>+1</button>
            <button type="button" className="btn btn-danger" onClick={props.subCounter}>-1</button>
          </div>
          <br/>
        </div>
      </div>
    </React.Fragment>
  )
}

// redux
function mapStateToProps (store) {
  return {
    counter: store.counterReducer.counter
  }
}

function mapDispatchToProps (dispatch) {
  return {
    addCounter: () => dispatch(add()),
    subCounter: () => dispatch(sub())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage)
