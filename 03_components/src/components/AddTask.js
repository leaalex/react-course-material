import React from "react";

const inputRef = React.createRef()

const AddTask = (props) => {

  const submit = (event) => {
    const isSubmit = event.type === 'click' || event.type === 'keypress' && event.key === 'Enter'
    if (isSubmit){
      props.onClickButton()
      inputRef.current.value = ''
    }

  }
  return (
    <>
      <input
        ref={inputRef}
        type="text"
        placeholder='Новая задача'
        onChange={props.onChangeInput}
        onKeyPress={submit}
      />
      <button onClick={submit}>Добавить задачу</button>
    </>
  )
}

export default AddTask

// <input type="text" onChange={this.changeInput}/>
// <button onClick={this.addTask}>Добавить задачу</button>
