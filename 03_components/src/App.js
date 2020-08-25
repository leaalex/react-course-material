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

  deleteTask =(index) => {
    console.log('Удалить', this.state.cards[index])
  }

  changeInput = (event) => {
    this.input = event.target.value
  }

  addTask = () => {
    this.setState({
      cards: [{title: this.input, completed:false}, ...this.state.cards,]
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
          onChangeСheckbox={() => this.changeTaskCompleted(index)}
          onDelete={()=>this.deleteTask(index)}
        >
          {/*<button onClick={this.changeTaskCompleted.bind(this, index)}>click</button>*/}
        </Card>
          )

    return (
      <>
        <h1>{ this.props.globalTitle }</h1>
        <button className='btn btn-primary' style={{float: 'right'}} onClick={this.buttonClick}>{buttonTitle}</button>
        <h3>{ pageTitle } </h3>
        {
          isShowTasks &&
          <div className={'mt-4'}>
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
