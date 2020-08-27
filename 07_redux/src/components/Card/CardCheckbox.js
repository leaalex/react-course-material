import React from 'react'
import { CardsContext } from '../../pages/TasksPage'
import { connect } from 'react-redux'

const CardCheckbox = ({ id, counter }) => {
  const getClass = (value) => value ? 'border-danger bg-danger' : ''

  return (
    <CardsContext.Consumer>
      {
        ({ cardsObject, onTaskCompleted }) => {
          const { completed, deleted } = cardsObject[id]
          console.log(deleted, getClass(deleted))
          return (<div className={`input-group-text ${getClass(deleted)}`}>
            <input type="checkbox" onChange={() => onTaskCompleted(id)} defaultChecked={completed} />
          </div>)
        }
      }
    </CardsContext.Consumer>

  )
}

export default CardCheckbox
