import React from "react";
import './Card.scss'

const Card = (props) => {
  console.log(props);
  return(
    <div className="input-group mb-3">
      <div className="input-group-prepend">
        <div className="input-group-text">
          <input type="checkbox" onChange={props.onClick} checked={props.completed} />
        </div>
      </div>
      <input type="text" value={props.title} className="form-control" />
    </div>
  )
}

export default Card
