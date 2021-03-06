import React from "react";
// Context API
import {Actions} from "../App";

import addClass from "../hoc/addClass";

const inputRef = React.createRef()

const AddTask = (props) => {
  console.log(props)
  const submit = (event , action) => {
    const isSubmit = event.type === 'click'
      || event.type === 'keypress' && event.key === 'Enter'
    if (isSubmit){
      action()
      inputRef.current.value = ''
    }

  }
  return (
    <Actions.Consumer>
      { value => (
      <div className="input-group mb-3">
        <input
          ref={inputRef}
          placeholder='Новая задача'
          onChange={value.changeInput}
          onKeyPress={(event)=> submit(event, value.addTask )} type="text"
          className="form-control"
        />
          <div className="input-group-append">
            <button onClick={(event)=> submit(event, value.addTask )} className={`btn btn-outline-${value.color}`} type="button">
              Добавить задачу
            </button>
          </div>
      </div>)
      }
    </Actions.Consumer>
  )
}

export default addClass(AddTask, 'm-5')
