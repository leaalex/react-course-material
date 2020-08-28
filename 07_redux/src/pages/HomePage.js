import React from 'react'
import { connect } from 'react-redux'
import { add, sub, addTaskAsync } from '../redux/actions/actionList'

// class HomePage extends React.Component {
//   state = {counter: 0}
//
//   addCounter = () => {
//     this.setState({counter: this.state.counter +1})
//   }
//   subCounter = () => {
//     this.setState({counter: this.state.counter -1})
//   }
//
//   render() {
//     return (
//       <React.Fragment>
//         <h1>React Task Manager with Redux </h1>
//         <div className="card">
//           <div className="card-body text-center">
//             <h1 className={'display-1'}>{this.state.counter}</h1>
//             <div className="btn-group" role="group" aria-label="Basic example">
//               <button type="button" className="btn btn-success" onClick={this.addCounter}>+1</button>
//               <button type="button" className="btn btn-danger" onClick={this.subCounter}>-1</button>
//             </div>
//             <h1 className={'display-4'}>{this.props.counter}</h1>
//             <div className="btn-group" role="group" aria-label="Basic example">
//               <button type="button" className="btn btn-success" onClick={this.props.addCounter}>+1</button>
//               <button type="button" className="btn btn-danger" onClick={this.props.subCounter}>-1</button>
//             </div>
//           </div>
//         </div>
//       </React.Fragment>
//     )
//
//   }
// }

const HomePage = (props) => {
  return (
    <React.Fragment>
      <h1>{props.title}</h1>
      <div className="card">
        <div className="card-body text-center">
          <h1 className={'display-4'}>{props.counter}</h1>
          <div className="btn-group" role="group" aria-label="Basic example">
            <button type="button" className="btn btn-success" onClick={props.addCounter}>+1</button>
            <button type="button" className="btn btn-danger" onClick={props.subCounter}>-1</button>
          </div>
          <br/>
          <div className="btn-group" role="group" aria-label="Basic example">
            <button type="button" className="btn btn-success" onClick={() => props.addCounterToNumber()}>+</button>
            <input type="text"/>
            <button type="button" className="btn btn-danger" onClick={() => props.subCounterToNumber()}>-</button>
          </div>
        </div>
        <button type="button" className="btn btn-danger" onClick={props.addTaskAsync}>addTaskAsync</button>
        <button type="button" className="btn btn-danger" onClick={() => console.log(props.taskList)}>log</button>
      </div>
      {
        props.taskList.map(task => <div key={task.id}>{task.userId} {task.title}</div>)
      }
    </React.Fragment>
  )
}

// redux
function mapStateToProps (store) {
  return {
    counter: store.counterReducer.counter,
    taskList: store.taskReducer.taskList
  }
}

function mapDispatchToProps (dispatch) {
  return {
    // addCounter: () => dispatch(add()),
    addCounter: () => dispatch(add()),
    subCounter: () => dispatch(sub()),
    addTaskAsync: () => dispatch(addTaskAsync())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage)
