import React from 'react'
import AddTask from '../components/AddTask'
// import {ActionsCards} from "../App";
import Card from '../components/Card/Card'
import { Route, withRouter } from 'react-router-dom'
import CardDetails from '../components/Card/CardDetails'
import {genId} from "../utils";
// Context API
export const CardsContext = React.createContext({})

class TasksPage extends React.Component {
  constructor (props) {
    super()
    this.state = {
      cards: [
        { id: 'id_474a890', title: '__Прочитать про React', desc: 'Описание задачи', priority: 1, date: '', completed: false, deleted: false },
        { id: 'id_474a8b0', title: '__Сходить за хлебом', desc: 'Описание задачи', priority: 1, date: '', completed: false, deleted: false },
        { id: 'id_474a89e', title: '__Помыть машину', desc: 'Описание задачи', priority: 1, date: '', completed: false, deleted: false }
      ],
      isShowDeleteTasks: false,
      color: 'secondary'
    }
  }

  buttonClick = () =>{
    this.setState({
      isShowDeleteTasks: !this.state.isShowDeleteTasks
    })
  }

  onDelete = (id) => {
    let newCards = [...this.state.cards]
    newCards = newCards.map(card => {return {...card}})
    const card = newCards.find(card => card.id === id )
    card.deleted = !card.deleted
    this.setState({
      cards: newCards
    })
  }

  onSave = (id, value) => {
    console.log(1, id, value)
    let newCards = [...this.state.cards]
    newCards = newCards.map(card => {return {...card}})
    const card = newCards.find(card => card.id === id )
    card.title = value
    this.setState({
      cards: newCards
    })
  }

  onTaskCompleted = (id) => {
    let newCards = [...this.state.cards]
    newCards = newCards.map(card => {return {...card}})
    const card = newCards.find(card => card.id === id )
    card.completed = !card.completed
    this.setState({
      cards: newCards
    })
  }
  // AddTask.js
  changeInput = (event) => {
    this.input = event.target.value
  }

  addTask = () => {
    this.setState({
      cards: [{id: genId(), title: this.input, completed:false, deleted: false}, ...this.state.cards,]
    })
  }

  render () {
    const cards = this.state.cards
      .filter(card => this.state.isShowDeleteTasks || !card.deleted)
      .map(card => <Card id={card.id} key={card.id}/>)

    const cardsObject = this.state.cards.reduce((object, card) => {
      const cardTemp = {}
      cardTemp[card.id] = card
      return { ...object, ...cardTemp }
    }, {})
    const CardsContextObject = {
      cardsObject,
      onDelete: this.onDelete,
      onSave: this.onSave,
      onTaskCompleted: this.onTaskCompleted,
      color: this.state.color,
      changeInput: this.changeInput,
      addTask: this.addTask
    }

    return (
      <React.Fragment>
        <CardsContext.Provider value={CardsContextObject}>
          <button className='btn btn-primary' style={{ float: 'right' }} onClick={() => this.props.history.push('/')}>home
          </button>
          <h1>TasksPage</h1>
          <button className='btn btn-primary' style={{ float: 'right' }} onClick={this.buttonClick}>
            {this.state.isShowDeleteTasks ? 'Скрыть удаленные задачи' : 'Показать удаленные задачи'}
          </button>
          <h3>Список задач</h3>
          <div className={'mt-4'}>
            <AddTask/>
            <div>
              {cards}
            </div>
          </div>
          <Route path='/tasks/:taskid' component={CardDetails}/>
        </CardsContext.Provider>
      </React.Fragment>
    )
  }
}

export default withRouter(TasksPage)
