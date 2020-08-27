import React from 'react'
import { CardsContext } from '../../pages/TasksPage'

const CardDetails = (props) => {
  console.log(props)
  const taskid = props.match.params.taskid

  return (
    <CardsContext.Consumer>
      {
        ({ cardsObject }) => {
          const { title, desc, priority, date } = cardsObject[taskid]
          return (

            <div className="card">
              <div className="card-body">
                <h2>CardDetails</h2>
                <h3>{title}<span> от {date}</span></h3>
                <div className="form-group">
                  <label >Описание задачи</label>
                  <textarea className="form-control" defaultValue={desc}></textarea>
                </div>
                <div className="form-group">
                  <label >Приоритет задачи</label>
                  <select className="form-control" value={priority}>
                    <option value="1">Высокий</option>
                    <option value="2">Обычный</option>
                    <option value="3">Низкий</option>
                  </select>
                </div>
                <button className="btn btn-success mr-2">Сохранить</button>
                <button className="btn btn-danger" onClick={() => props.history.push('/tasks')}>Закрыть</button>
              </div>
            </div>
          )
        }
      }
    </CardsContext.Consumer>
  )
}

export default CardDetails
