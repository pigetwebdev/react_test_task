import { combineReducers } from 'redux'
import todos from './TodoReducer'
import AddStateReducer from './AddStateReducer'
export default combineReducers({
  todos,
  AddStateReducer

})