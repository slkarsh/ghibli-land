export const setMovies = movies => {
  return ({
    type: 'SET_MOVIES',
    movies
  })
}

export const setPeople = people => {
  return ({
    type: 'SET_PEOPLE',
    people
  })
}

export const setPlaces = places => {
  return ({
    type: 'SET_PLACES',
    places
  })
}

export const setVehicles = vehicles => {
  return ({
    type: 'SET_VEHICLES',
    vehicles
  })
}

export const addCharacter = character => {
  return ({
    type: 'ADD_CHARACTER',
    character
  })
}

export const removeCharacter = character => {
  return ({
    type: 'REMOVE_CHARACTER',
    character
  })
}

export const addLocation = location => {
  return ({
    type: 'ADD_LOCATION',
    location
  })
}

export const removeLocation = location => {
  return ({
    type: 'REMOVE_LOCATION',
    location
  })
}

export const addVehicle = vehicle => {
  return ({
    type: 'ADD_VEHICLE',
    vehicle
  })
}

export const removeVehicle = vehicle => {
  return ({
    type: 'REMOVE_VEHICLE',
    vehicle
  })
}

export const toggleAddCharacter = character => {
  return ({
    type: 'TOGGLE_ADD_CHARACTER',
    character
  })
}