export const fetchFilms = async () => {
  const response = await fetch('https://ghibliapi.herokuapp.com/films')
  const data = await response.json()
  console.log('films', data)
  return data
}

export const fetchSpecies = async () => {
  const response = await fetch('https://ghibliapi.herokuapp.com/species')
  const data = await response.json()
  console.log('species', data)
  return data
}

export const fetchPeople = async () => {
  const response = await fetch('https://ghibliapi.herokuapp.com/people')
  const data = await response.json()
  console.log('people', data)
  return data
}

export const fetchLocations = async () => {
  const response = await fetch('https://ghibliapi.herokuapp.com/locations')
  const data = await response.json()
  console.log('locations', data)
  return data
}