import { combineReducers } from 'redux'
import { movies } from './movies'
import { characters } from './characters'


export const rootReducer = combineReducers({
  movies,
  characters
})

export default rootReducer