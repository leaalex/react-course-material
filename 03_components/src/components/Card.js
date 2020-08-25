import React from "react";
import './Card.scss'

const Card = (props) => {

  console.log(props);
  return(
    <div className="input-group mb-3">
      <div className="input-group-prepend">
        <div className="input-group-text">
          <input type="checkbox" onChange={props.onChangeСheckbox} checked={props.completed} />
        </div>
      </div>
      <input type="text" defaultValue={props.title} className="form-control"  disabled/>
      <div className="input-group-append">
        <button
          className="btn btn-outline-success"
          type="button"
        >
          Редактировать
        </button>
        <button
          onClick={props.onDelete}
          className="btn btn-outline-danger"
          type="button"
        >
          Удалить
        </button>
      </div>
    </div>
  )
}

export default Card
