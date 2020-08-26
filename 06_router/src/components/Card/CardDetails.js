import React from "react";
import {ActionsCards} from "../../App";

const CardDetails = (props) => {
  console.log(props);

  return (
    <ActionsCards.Consumer>
    {
      ({cardsObject}) => (<><h2>CardDetails</h2> <h3>{cardsObject[props.match.params.taskid].title}</h3></>)
    }
    </ActionsCards.Consumer>
      )
}

export default CardDetails
