import React, { useContext } from 'react'
import { CardsContext } from '../../pages/TasksPage'

const CardCheckbox = ({ id }) => {
  const { cardsObject, onTaskCompleted } = useContext(CardsContext)
  const getClass = (value) => value ? 'border-danger bg-danger' : ''
  const { completed, deleted } = cardsObject[id]
  return (
    <div className={`input-group-text ${getClass(deleted)}`}>
      <input type="checkbox" onChange={() => onTaskCompleted(id)} defaultChecked={completed} />
    </div>
  )
}

export default CardCheckbox
