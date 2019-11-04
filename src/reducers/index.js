import { combineReducers } from 'redux'
import { movies } from './movies'
import { characters } from './characters'
import { places } from './places'
import { vehicles } from './vehicles'
import { diyMovie } from './diyMovie'


export const rootReducer = combineReducers({
  movies,
  characters,
  places,
  vehicles,
  diyMovie
})

export default rootReducer