import React, {Component} from 'react';
import './App.css';
// component
import Card from "./components/Card";

class App extends Component {
  state = {
    cards: [
      {title:'Прочитать про React', completed:true},
      {title:'Сходить за хлебом', completed:false},
      {title:'Помыть машину', completed:true},
    ],
    pageTitle: 'Список задач',
    buttonTitle: 'Показать/Скрыть задачи',
    isShowTasks: false
  }
  buttonClick = () => {
    this.setState({
      isShowTasks: !this.state.isShowTasks
    })
  }

  render() {
    let {cards, pageTitle, buttonTitle, isShowTasks} = this.state
    cards = cards.map((card, index) => <Card key={index} title={card.title} completed={card.completed}/> )
    return (
      <div>
        <h1>{ pageTitle }</h1>
        <button onClick={this.buttonClick}>{buttonTitle}</button>
        { isShowTasks && cards }
      </div>
    )
  }
}

export default App;
