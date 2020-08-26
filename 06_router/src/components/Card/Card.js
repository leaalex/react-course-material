import React from "react";
import './Card.scss'
import CardCheckbox from "./CardCheckbox";

import {ActionsCards} from "../../App";



const Card = ({id}) => {
  const inputRef = React.createRef()
  let isEdited = false
  const editInput = (button, save) => {
    if(isEdited) {
      inputRef.current.setAttribute('disabled', '')
      button.innerText = 'Редактировать'
      save(inputRef.current.value)
    }
    else {
      inputRef.current.removeAttribute('disabled')
      button.innerText = 'Сохранить'
    }
    isEdited=!isEdited
  }

  const inputClass = (value) => {return value? 'border-danger' : ''}

  return (
    <ActionsCards.Consumer>
      {
        ({cardsObject, onDelete, onSave}) => {
          return (<div className="input-group mb-3">
            <div className="input-group-prepend">
              <CardCheckbox id={id}/>
            </div>
            <input ref={inputRef}
                   type="text"
                   defaultValue={cardsObject[id].title}
                   className={`form-control ${inputClass(cardsObject[id].deleted)}`}
                   disabled
            />
            <div className="input-group-append">
              {
                !cardsObject[id].deleted &&
                <button
                  className="btn btn-outline-success"
                  type="button"
                  onClick={(event) => editInput(event.target, onSave)}
                >
                  Редактировать
                </button>
              }

              <button
                onClick={() => onDelete(id)}
                className="btn btn-outline-danger"
                type="button"
              >
                {!cardsObject[id].deleted ? 'Удалить' : 'Вернуть'}
              </button>
            </div>
          </div>)
        }
      }
      </ActionsCards.Consumer>
  )
}

export default Card
