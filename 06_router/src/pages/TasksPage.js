import React from "react";
import AddTask from "../components/AddTask";
// import {ActionsCards} from "../App";
import Card from "../components/Card/Card";
import {withRouter} from "react-router-dom"


const TasksPage = (props) => {
  console.log('TasksPage', props)

  const cards = props.cards.filter(card => props.isShowDeleteTasks || !card.deleted)
    .map(
      card => <Card
        id={card.id}
        key={card.id}
      />)

  return (<>
      <button className='btn btn-primary' style={{float: 'right'}} onClick={() => props.history.push('/')}>home</button>
      <h1>TasksPage</h1>
      <button className='btn btn-primary' style={{float: 'right'}} onClick={props.buttonClick}>
      {props.isShowDeleteTasks? 'Скрыть удаленные задачи': 'Показать удаленные задачи'}
      </button>
      <h3>Список задач</h3>
      <div className={'mt-4'}>
      <AddTask/>
      <div>
          {cards}
      </div>
      </div>
    </>
)
}
export default withRouter(TasksPage)
