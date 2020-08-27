import React from 'react'

// components
import Card from './Card'
import AddTask from '../AddTask'
import { CardsContext } from '../../pages/TasksPage'

const CardList = (props) => {
  return (
    <CardsContext.Consumer>
      {
        ({ cards }) => {
          return (
            <React.Fragment>
              <h1>TasksPage</h1>
              <button className='btn btn-primary' style={{ float: 'right' }} onClick={props.buttonClick}>
                { props.isShowDeleteTasks ? 'Скрыть удаленные задачи' : 'Показать удаленные задачи'}
              </button>
              <h3>Список задач</h3>
              <div className={'mt-4'}>
                <AddTask/>
                <div>
                  {cards}
                </div>
              </div>
            </React.Fragment>
          )
        }
      }
    </CardsContext.Consumer>

  )
}

export default CardList
