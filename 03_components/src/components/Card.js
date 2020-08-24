import React from "react";
import './Card.scss'

const Card = (props) => {
  console.log(props);
  return(
    <p>
      <input type="checkbox" onChange={props.onClick} checked={props.completed}/>
      {props.title} {props.children}
    </p>
  )
}

export default Card
