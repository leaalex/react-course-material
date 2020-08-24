import React from "react";
import './Card.scss'

const Card = (props) => {
  console.log(props);
  return(
    <p>
      <input type="checkbox" checked={props.completed ? 'true' : ''}/>
      {props.title} {props.children}
    </p>
  )
}

export default Card
