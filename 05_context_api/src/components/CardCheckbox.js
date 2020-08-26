import React from "react";
import {ActionsCards} from "../App";

const CardCheckbox = ({id}) =>{

   const getClass = (value) => value ? 'border-danger bg-danger' : ''

  return (
    <ActionsCards.Consumer>
      {
        ({cardsObject, changeTaskCompleted}) => {
          const {completed, deleted } = cardsObject[id]
          console.log(deleted, getClass(deleted));
          return (<div className={`input-group-text ${getClass(deleted)}`}>
            <input type="checkbox" onChange={() => changeTaskCompleted(id)} defaultChecked={completed} />
          </div>)
        }
      }
    </ActionsCards.Consumer>

  )

}

export default CardCheckbox
