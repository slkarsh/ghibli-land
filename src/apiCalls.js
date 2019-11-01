export const fetchFilms = async () => {
  const response = await fetch('https://ghibliapi.herokuapp.com/films')
  const data = await response.json()
  const filtered = data.filter(movie => {
    return movie.director.includes("Hayao Miyazaki")
  })
  return filtered
}

export const getPeople = () => {
  return fetch('https://ghibliapi.herokuapp.com/people')
    .then(res => res.json())
    .then(people => {
      const personInfo = people.map(async person => {
        // const { name, age, gender } = person
        const speciesInfo = await fetchSpecies(person.species)
        return {
          ...person,
          species: speciesInfo
        }
      })
      return Promise.all(personInfo)
    })
}

export const fetchSpecies = async (speciesUrl) => {
  const response = await fetch(speciesUrl)
  const species = await response.json()
  return species.name
  // return name
}

export const fetchLocations = async () => {
  const response = await fetch('https://ghibliapi.herokuapp.com/locations')
  const data = await response.json()
  console.log('locations', data)
  return data
}

export const fetchVehicles = async () => {
  const response = await fetch('https://ghibliapi.herokuapp.com/vehicles')
  const vehicles = await response.json()
  return vehicles
}


