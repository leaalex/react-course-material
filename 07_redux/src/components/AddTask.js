import React, { useState } from 'react'
import { connect } from 'react-redux'
import { addNewTask } from '../redux/actions/actionList'
import { genId } from '../utils'

const AddTask = (props) => {
  const [input, changeInput] = useState('')

  const submit = (event) => {
    const isSubmit = event.type === 'click' ||
      event.type === 'keypress' && event.key === 'Enter'
    if (isSubmit) {
      const id = genId()
      const taskObject = {}
      taskObject[id] = { id: id, title: input, desc: 'Описание задачи', priority: 3, date: '', completed: false, deleted: false }
      props.addNewTask({ id, taskObject })
      changeInput('')
    }
  }
  return (
    <div className="input-group mb-3">
      <input
        value={input}
        onChange={(event) => changeInput(event.target.value)}
        placeholder='Новая задача'
        onKeyPress={submit}
        type="text"
        className="form-control"
      />
      <div className="input-group-append">
        <button onClick={ submit } className="btn btn-outline-primary" type="button">
              Добавить задачу
        </button>
      </div>
    </div>
  )
}

function mapDispatchToProps (dispatch) {
  return {
    addNewTask: (value) => dispatch(addNewTask(value))
  }
}

export default connect(null, mapDispatchToProps)(AddTask)
