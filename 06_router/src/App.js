import React, {Component} from 'react';
import { Route, NavLink, Switch } from "react-router-dom";
import './App.css';
// pages
import AboutPage from "./pages/AboutPage";
import HomePage from "./pages/HomePage";
import TasksPage from "./pages/TasksPage";

// component
import CardDetails from "./components/Card/CardDetails";
import AddTask from "./components/AddTask";

// hoc
import Container from "./hoc/Container";
import addClass from "./hoc/addClass";

//utils
import { genId } from "./utils/index"

// Context API
export const Actions = React.createContext({})
export const ActionsCards = React.createContext({})

class App extends Component {
  constructor(props){
    super()
    this.state = {
      cards: [
        {id: 'id_474a890', title:'Прочитать про React', completed:true, deleted: false},
        {id: 'id_474a8b0', title:'Сходить за хлебом', completed:false, deleted: false},
        {id: 'id_474a89e', title:'Помыть машину', completed:true, deleted: false},
      ],
      globalTitle: props.globalTitle,
      pageTitle: 'Список задач',
      isShowDeleteTasks: false,
      color: 'secondary'
    }

    this.buttonClick = this.buttonClick.bind(this)
  }
  buttonClick(){
    this.setState({
      isShowDeleteTasks: !this.state.isShowDeleteTasks
    })
  }

  changeTaskCompleted = (id) => {
    let newCards = [...this.state.cards]
    newCards = newCards.map(card => {return {...card}})
    const card = newCards.find(card => card.id === id )
    card.completed = !card.completed
    this.setState({
      cards: newCards
    })
  }

  changeTaskInput = (id, value) => {
    let newCards = [...this.state.cards]
    newCards = newCards.map(card => {return {...card}})
    const card = newCards.find(card => card.id === id )
    card.title = value
    this.setState({
      cards: newCards
    })
  }

  deleteTask =(id) => {
    let newCards = [...this.state.cards]
    newCards = newCards.map(card => {return {...card}})
    const card = newCards.find(card => card.id === id )
    card.deleted = !card.deleted
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

  render() {
    let {cards, isShowDeleteTasks, globalTitle} = this.state
    const cardsObject = cards.reduce((object, card) => {const cardTemp ={}
      cardTemp[card.id] = card
      return {...object, ...cardTemp} }, {})
    const CardsData = {
      cardsObject,
      changeTaskCompleted: this.changeTaskCompleted,
      onChangeCheckbox :this.changeTaskCompleted,
      onDelete: this.deleteTask,
      onSave: this.changeTaskInput,
    }

    return (
      <Container>
          <ul className="nav justify-content-center">
            <li className="nav-item">
              <NavLink className="nav-link" exact to= '/'>Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" activeClassName={'abc-active'} to="/tasks">Tasks</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" activeStyle={{color: 'gold'}} to="/about">About</NavLink>
            </li>
            <li className="nav-item">
              <button className='btn btn-secondary' style={{float: 'right'}} onClick={()=>console.log(this.state.cards, this.cardsObjct)}>log</button>
            </li>
          </ul>
        <Actions.Provider value={{color: this.state.color,changeInput: this.changeInput,addTask: this.addTask}}>
          <ActionsCards.Provider value={CardsData}>
              <Switch>
                <Route path='/' exact render={() => <HomePage title={ globalTitle } />}/>
                <Route path='/about' component={AboutPage}/>
                <Route path='/tasks/:taskid' render={()=> <TasksPage cards={cards} isShowDeleteTasks={isShowDeleteTasks} buttonClick={this.buttonClick}/>}/>
                <Route path='/tasks/' render={()=> <TasksPage cards={cards} isShowDeleteTasks={isShowDeleteTasks} buttonClick={this.buttonClick}/>}/>
                <Route render={() => <h1>404</h1>}/>
              </Switch>
          </ActionsCards.Provider>
        </Actions.Provider>
      </Container>
    )
  }
}

export default App
