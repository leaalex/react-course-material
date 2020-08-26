import React from "react";
import AddTask from "../components/AddTask";
import {ActionsCards} from "../App";
import Card from "../components/Card/Card";


const TasksPage = (props) => {
  const cards = props.cards.filter(card => props.isShowDeleteTasks || !card.deleted)
    .map(
      card => <Card
        id={card.id}
        key={card.id}
      />)

  return (<>
      <h1>TasksPage</h1>
      <button className='btn btn-primary' style={{float: 'right'}} onClick={props.buttonClick}>
      {props.isShowDeleteTasks? 'Скрыть удаленные задачи': 'Показать удаленные задачи'}
      </button>
      <h3>Список задач</h3>
      <div className={'mt-4'}>
      <AddTask x={1}/>
      <div>
          {cards}
      </div>
      </div>
    </>
)
}
export default TasksPage
