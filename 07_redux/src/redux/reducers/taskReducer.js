import { ADD_NEW_TASK } from '../actions/actionTypes'

const initialState = {
  cardIdList: ['id_474a890', 'id_474a8b0', 'id_474a89e'],
  cardObjectList: {
    id_474a890: { id: 'id_474a890', title: 'Прочитать про Vue', desc: 'Описание задачи', priority: 3, date: '', completed: false, deleted: false },
    id_474a8b0: { id: 'id_474a8b0', title: 'Сходить за хлебом', desc: 'Описание задачи', priority: 1, date: '', completed: false, deleted: false },
    id_474a89e: { id: 'id_474a89e', title: 'Помыть машину', desc: 'Описание задачи', priority: 1, date: '', completed: false, deleted: false }
  }
}

const taskReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_NEW_TASK:
      return {
        ...state,
        cardIdList: [action.value.id, ...state.cardIdList],
        cardObjectList: { ...action.value.taskObject, ...state.cardObjectList }
      }
  }
  return state
}

export default taskReducer
