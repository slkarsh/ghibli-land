import { combineReducers } from 'redux'
import { movies } from './movies'
import { characters } from './characters'
import { places } from './places'


export const rootReducer = combineReducers({
  movies,
  characters,
  places
})

export default rootReducer