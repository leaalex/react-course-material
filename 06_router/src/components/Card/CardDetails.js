import React from 'react'
import { CardsContext } from '../../pages/TasksPage'

const CardDetails = (props) => {
  console.log(props)

  return (
    <CardsContext.Consumer>
      {
        ({ cardsObject }) => (<><h2>CardDetails</h2> <h3>{cardsObject[props.match.params.taskid].title}</h3></>)
      }
    </CardsContext.Consumer>
  )
}

export default CardDetails
