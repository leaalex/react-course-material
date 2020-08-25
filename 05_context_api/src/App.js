import React, {Component} from 'react';
import './App.css';
// component
import Card from "./components/Card";
import AddTask from "./components/AddTask";

//utils
import { genId } from "./utils/index"

// Context API
export const Actions = React.createContext({})
export const ActionsCheckbox = React.createContext({})

class App extends Component {
  constructor(props){
    super()
    this.state = {
      cards: [
        {id: 'id_474a890', title:'Прочитать про React', completed:true, delete: false},
        {id: 'id_474a8b0', title:'Сходить за хлебом', completed:false, delete: false},
        {id: 'id_474a89e', title:'Помыть машину', completed:true, delete: false},
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
    card.delete = !card.delete
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
      cards: [{id: genId(), title: this.input, completed:false}, ...this.state.cards,]
    })
  }

  render() {
    let {cards, pageTitle, isShowDeleteTasks, globalTitle} = this.state
    const cardsObject = cards.reduce((object, card) => {const cardTemp ={}
      cardTemp[card.id] = card
      return {...object, ...cardTemp} }, {})


    cards = cards.filter(card => isShowDeleteTasks || !card.delete)
      .map(
      (card, index) =>
        <Card
          id={card.id}
          key={card.id}
          title={card.title}
          completed={card.completed}
          delete={card.delete}
          onChangeСheckbox={() => this.changeTaskCompleted(card.id)}
          onDelete={()=>this.deleteTask(card.id)}
          onSave={(value)=>this.changeTaskInput(card.id, value)}
        >
          {/*<button onClick={this.changeTaskCompleted.bind(this, index)}>click</button>*/}
        </Card>
          )
    return (
        <Actions.Provider value={{color: this.state.color,changeInput: this.changeInput,addTask: this.addTask}}>
          <h1>{ globalTitle }</h1>
          <button className='btn' style={{float: 'right'}} onClick={()=>console.log(this.state.cards, this.cardsObjct)}>log</button>
          <button className='btn btn-primary' style={{float: 'right'}} onClick={this.buttonClick}>
            {isShowDeleteTasks? 'Скрыть удаленные задачи': 'Показать удаленные задачи'}
          </button>
          <h3>{ pageTitle } </h3>

            <div className={'mt-4'}>
              <AddTask/>
              <div>
                <ActionsCheckbox.Provider value={{cardsObject, changeTaskCompleted: this.changeTaskCompleted}}>
                {cards}
                </ActionsCheckbox.Provider>
              </div>
            </div>
        </Actions.Provider>
    )
  }
}

export default App;
