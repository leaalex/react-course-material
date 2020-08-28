import React from 'react'
import { Route } from 'react-router-dom'

import CardList from '../components/Card/CardList'
import CardDetails from '../components/Card/CardDetails'


import {genId} from "../utils";
import Card from "../components/Card/Card";
import {add, sub} from "../redux/actions/actionList";
import {connect} from "react-redux";
// Context API
export const CardsContext = React.createContext({})

class TasksPage extends React.Component {
  constructor () {
    super()
    this.state = {
      cards: [
        { id: 'id_474a890', title: 'Прочитать про React', desc: 'Описание задачи', priority: 3, date: '', completed: false, deleted: false },
        { id: 'id_474a8b0', title: 'Сходить за хлебом', desc: 'Описание задачи', priority: 1, date: '', completed: false, deleted: false },
        { id: 'id_474a89e', title: 'Помыть машину', desc: 'Описание задачи', priority: 1, date: '', completed: false, deleted: false }
      ],
      isShowDeleteTasks: false,
      color: 'secondary',
      isOneWindow: true
    }
  }

  buttonClick = () =>{
    this.setState({
      isShowDeleteTasks: !this.state.isShowDeleteTasks
    })
  }
  onOneWindow = () =>{
    this.setState({
      isOneWindow: !this.state.isOneWindow
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
      cards: [{id: genId(), title: this.input,desc: 'Описание задачи', priority: 1, date: '', completed:false, deleted: false}, ...this.state.cards,]
    })
  }

  render () {
    const CardsContextObject = {
      cardsObject: this.props.cardObjectList,
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
          <button className='btn btn-secondary' style={{ float: 'right' }} onClick={this.onOneWindow}>onOneWindow</button>
          <Route path='/tasks/' exact={this.state.isOneWindow} render={(props)=> <CardList isShowDeleteTasks={this.state.isShowDeleteTasks} buttonClick={this.buttonClick} {...props}/>}/>
          <Route path='/tasks/:taskid'  component={CardDetails}/>
        </CardsContext.Provider>

      </React.Fragment>
    )
  }
}

function mapStateToProps (store) {
  return {
    cards: store.taskReducer.cards,
    cardIdList: store.taskReducer.cardIdList,
    cardObjectList: store.taskReducer.cardObjectList,
  }
}

function mapDispatchToProps (dispatch) {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TasksPage)
