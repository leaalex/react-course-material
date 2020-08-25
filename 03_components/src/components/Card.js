import React from "react";
import './Card.scss'

const Card = (props) => {
  const classes = {
    input: props.delete? 'border-danger' : '',
    checkbox:  props.delete? 'border-danger bg-danger' : ''
  }

  console.log(props);
  return(
    <div className="input-group mb-3">
      <div className={`input-group-prepend `}>
        <div className={`input-group-text ${classes.checkbox}`}>
          <input type="checkbox" onChange={props.onChangeСheckbox} checked={props.completed} />
        </div>
      </div>
      <input type="text" defaultValue={props.title} onChange={props.onChangeInput} className={`form-control ${classes.input}`} disabled/>
      <div className="input-group-append">
        {
          !props.delete &&
          <button
            className="btn btn-outline-success"
            type="button"
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
