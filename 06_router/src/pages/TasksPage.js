import React from 'react'
import AddTask from '../components/AddTask'
// import {ActionsCards} from "../App";
import Card from '../components/Card/Card'
import { Route, withRouter } from 'react-router-dom'
import CardDetails from '../components/Card/CardDetails'
// Context API
export const CardsContext = React.createContext({})

class TasksPage extends React.Component {
  render () {
    console.log('TasksPage', this.props)

    const cards = this.props.cards.filter(card => this.props.isShowDeleteTasks || !card.deleted)
      .map(
        card => <Card
          id={card.id}
          key={card.id}
        />)

    return (
      <React.Fragment>
        <button className='btn btn-primary' style={{ float: 'right' }} onClick={() => this.props.history.push('/')}>home
        </button>
        <h1>TasksPage</h1>
        <button className='btn btn-primary' style={{ float: 'right' }} onClick={this.props.buttonClick}>
          {this.props.isShowDeleteTasks ? 'Скрыть удаленные задачи' : 'Показать удаленные задачи'}
        </button>
        <h3>Список задач</h3>
        <div className={'mt-4'}>
          <AddTask/>
          <div>
            {cards}
          </div>
        </div>
        <Route path='/tasks/:taskid' component={CardDetails}/>
      </React.Fragment>
    )
  }
}

export default withRouter(TasksPage)
