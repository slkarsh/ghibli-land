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

export const toggleAddCharacter = character => {
  return ({
    type: 'TOGGLE_ADD_CHARACTER',
    character
  })
}

export const toggleAddLocation = location => {
  return ({
    type: 'TOGGLE_ADD_LOCATION',
    location
  })
}

export const toggleAddVehicle = vehicle => {
  return ({
    type: 'TOGGLE_ADD_VEHICLE',
    vehicle
  })
}

export const addTitleAndPlot = ({ title, plot, score }) => {
  return ({
    type: 'ADD_TITLE_AND_PLOT',
    title,
    plot,
    score
  })
}