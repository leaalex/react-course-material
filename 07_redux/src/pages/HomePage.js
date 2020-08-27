import React from 'react'
import { connect } from 'react-redux'

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
      <h1>React Task Manager with Redux </h1>
      <div className="card">
        <div className="card-body text-center">
          <h1 className={'display-4'}>{props.counter}</h1>
          <div className="btn-group" role="group" aria-label="Basic example">
            <button type="button" className="btn btn-success" onClick={props.addCounter}>+1</button>
            <button type="button" className="btn btn-danger" onClick={props.subCounter}>-1</button>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

// redux
function mapStateToProps (state) {
  return { counter: state.counter }
}

function mapDispatchToProps (dispatch) {
  return {
    addCounter: () => dispatch({ type: 'ADD' }),
    subCounter: () => dispatch({ type: 'SUB' })
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage)
