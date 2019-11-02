const initialState = {
  characters: [],
  locations: [],
  vehicles: [],
  title: '',
  plot: ''
}

export const diyMovie = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_CHARACTER':
      return {
        ...initialState,
        characters: [...characters, action.character]
      }
    case 'REMOVE_CHARACTER': {
      const newState = state.characters.filter(character => {
        return character.name !== action.character.name
      })
      return newState
    }
    case 'ADD_LOCATION':
      return {
        locations: action.location
      }
    case 'REMOVE_LOCATION': 
      const newState = state.locations.filter(location => {
        return location.name !== action.location.name
      })
      return newState
    case 'ADD_VEHICLE':
      return {
        vehicles: action.vehicle
      }
    case 'REMOVE_VEHICLE':
      const newState = state.vehicles.filter(vehicle => {
        return vehicle.name !== action.vehicle.name
      })
      return newState
    default:
      return state
  }
}



const newState = state.filter(favorite => {
  return favorite.movie_id !== action.movieId
})
return newState;