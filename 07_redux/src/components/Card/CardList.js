import React from 'react'

// components
import Card from './Card'
import AddTask from '../AddTask'
import { connect } from 'react-redux'

const CardList = (props) => {
  const cards = props.cardIdList.map(cardId => <Card id={cardId} key={cardId}/>)
  return (
    <React.Fragment>
      <h1>TasksPage</h1>
      <button className='btn btn-primary' style={{ float: 'right' }} onClick={props.buttonClick}>
        { props.isShowDeleteTasks ? 'Скрыть удаленные задачи' : 'Показать удаленные задачи'}
      </button>
      <h3>Список задач</h3>
      <div className={'mt-4'}>
        <AddTask/>
        <div>
          {cards}
        </div>
      </div>
    </React.Fragment>
  )
}

function mapStateToProps (store) {
  return {
    cardIdList: store.taskReducer.cardIdList
    // cardObjectList: store.taskReducer.cardObjectList,
  }
}

function mapDispatchToProps (dispatch) {
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(CardList)
