const initialState = {
  characters: [],
  locations: [],
  vehicles: [],
  title: '',
  plot: '',
  score: null
}

export const diyMovie = (state = initialState, action) => {
  switch (action.type) {
    case 'TOGGLE_ADD_CHARACTER': 
      const existingCharacter = state.characters.find(character => {
        return character.name === action.character.name
      })
      if (!existingCharacter) {
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
    case 'TOGGLE_ADD_LOCATION': 
      const existingLocation = state.locations.find(location => {
        return location.name === action.location.name
      })
      if (!existingLocation) {
        return {
          ...state,
          locations: [...state.locations, action.location]
        }
      } else {
        const newLocationsState = state.locations.filter(location => {
          return location.name !== action.location.name
        })
        return {
          ...state,
          locations: [...newLocationsState]
        }
      }
    case 'TOGGLE_ADD_VEHICLE':
      const existingVehicle = state.vehicles.find(vehicle => {
        return vehicle.name === action.vehicle.name
      })
      if (!existingVehicle) {
        return {
          ...state,
          vehicles: [...state.vehicles, action.vehicle]
        }
      } else {
        const newVehiclesState = state.vehicles.filter(vehicle => {
          return vehicle.name !== action.vehicle.name
        })
        return {
          ...state,
          vehicles: [...newVehiclesState]
        }
      }
    case 'ADD_TITLE_AND_PLOT':
      return {
        ...state,
        title: action.title,
        plot: action.plot,
        score: action.score
      }
    default:
      return state
  }
}
