import React from "react";
import './Card.scss'
import CardCheckbox from "./CardCheckbox";



const Card = (props) => {
  const inputRef = React.createRef()
  let isEdited = false
  const editInput = (input, button) => {
    console.log(button)
    if(isEdited) {
      input.setAttribute('disabled', '')
      button.innerText = 'Редактировать'
      props.onSave(inputRef.current.value)
    }
    else {
      input.removeAttribute('disabled')
      button.innerText = 'Сохранить'
    }
    isEdited=!isEdited
  }

  const classes = {
    input: props.delete? 'border-danger' : '',

  }
  return(
    <div className="input-group mb-3">
      <div className="input-group-prepend" >
        <CardCheckbox {...props}/>
      </div>
      <input ref={inputRef}
             type="text"
             defaultValue={props.title}
             className={`form-control ${classes.input}`}
             disabled
      />
      <div className="input-group-append">
        {
          !props.delete &&
          <button
            className="btn btn-outline-success"
            type="button"
            onClick={(event)=> editInput(inputRef.current, event.target)}
          >
            Редактировать
          </button>
        }

        <button
          onClick={props.onDelete}
          className="btn btn-outline-danger"
          type="button"
        >
          {!props.delete? 'Удалить': 'Вернуть'}
        </button>
      </div>
    </div>
  )
}

export default Card
