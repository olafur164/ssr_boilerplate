import { combineReducers } from 'redux'
import flashMessage from './reducers/flashMessage'
import student from './reducers/student'

export default combineReducers({
  student,
  flashMessage
})
