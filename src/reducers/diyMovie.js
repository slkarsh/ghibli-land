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
        ...state,
        characters: [...state.characters, action.character]
      }
    case 'REMOVE_CHARACTER': {
      const newCharacterState = state.characters.filter(character => {
        return character.name !== action.character.name
      })
      return newCharacterState
    }
    case 'ADD_LOCATION':
      return {
        ...state,
        locations: [...state.locations, action.location]
      }
    case 'REMOVE_LOCATION': 
      const newLocationState = state.locations.filter(location => {
        return location.name !== action.location.name
      })
      return newLocationState
    case 'ADD_VEHICLE':
      return {
        ...state,
        vehicles: [...state.vehicles,action.vehicle]
      }
    case 'REMOVE_VEHICLE':
      const newVehicleState = state.vehicles.filter(vehicle => {
        return vehicle.name !== action.vehicle.name
      })
      return newVehicleState
    case 'TOGGLE_ADD_CHARACTER': 
      const isPresent = state.characters.find(character => {
        return character.name === action.character.name
      })
      if (!isPresent) {
        return {
          ...state,
          characters: [...state.characters, action.character]
        }
      } else {
        const newCharacterState = state.characters.filter(character => {
          return character.name !== action.character.name
        })
        return {
          ...state,
          characters: [...newCharacterState]
        }
      }
    default:
      return state
  }
}



// const newState = state.filter(favorite => {
//   return favorite.movie_id !== action.movieId
// })
// return newState;