import React, {Component} from 'react';
import './App.css';
// component
import Card from "./components/Card";
import AddTask from "./components/AddTask";


class App extends Component {
  state = {
    cards: [
      {title:'Прочитать про React', completed:true},
      {title:'Сходить за хлебом', completed:false},
      {title:'Помыть машину', completed:true},
    ],
    pageTitle: 'Список задач',
    buttonTitle: 'Показать/Скрыть задачи',
    isShowTasks: true
  }


  buttonClick = () => {
    this.setState({
      isShowTasks: !this.state.isShowTasks
    })
  }
  changeTaskCompleted = (index) => {
    const newCards = [...this.state.cards]
    newCards[index].completed = !this.state.cards[index].completed
    this.setState({
      cards: newCards
    })
    console.log(this.state.cards)
  }

  changeInput = (event) => {
    this.input = event.target.value
  }

  addTask = () => {
    this.setState({
      cards: [...this.state.cards, {title: this.input, completed:false}]
    })
  }

  render() {
    let {cards, pageTitle, buttonTitle, isShowTasks} = this.state
    cards = cards.map(
      (card, index) =>
        <Card
          key={index}
          title={card.title}
          completed={card.completed}
          onClick={() => this.changeTaskCompleted(index)}
        >
          {/*<button onClick={this.changeTaskCompleted.bind(this, index)}>click</button>*/}
        </Card>
          )

    return (
      <>
        <h1>{ this.props.globalTitle }</h1>
        <h3>{ pageTitle }</h3>
        <button onClick={this.buttonClick}>{buttonTitle}</button>
        {
          isShowTasks &&
          <div>
            <AddTask
              onChangeInput={this.changeInput}
              onClickButton={this.addTask}
            />
            <div>
              {cards}
            </div>
          </div>
        }
      </>
    )
  }
}

export default App;
