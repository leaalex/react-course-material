import React from "react";

const inputRef = React.createRef()

const AddTask = (props) => {

  const submit = (event) => {
    const isSubmit = event.type === 'click'
      || event.type === 'keypress' && event.key === 'Enter'
    if (isSubmit){
      props.onClickButton()
      inputRef.current.value = ''
    }

  }
  return (
    <>
      <div className="input-group mb-3">
        <input
          ref={inputRef}
          placeholder='Новая задача'
          onChange={props.onChangeInput}
          onKeyPress={submit} type="text"
          className="form-control"
        />
          <div className="input-group-append">
            <button
              onClick={submit}
              className="btn btn-outline-primary"
              type="button"
            >
              Добавить задачу
            </button>
          </div>
      </div>
    </>
  )
}

export default AddTask

// <input type="text" onChange={this.changeInput}/>
// <button onClick={this.addTask}>Добавить задачу</button>
