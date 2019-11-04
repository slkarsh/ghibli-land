export const fetchFilms = async () => {
  const response = await fetch('https://ghibliapi.herokuapp.com/films')
  const data = await response.json()
  const filtered = data.filter(movie => {
    return movie.director.includes("Hayao Miyazaki")
  })
  const updatedData = filtered.map((film, index) => {
    const { title, description, release_date, rt_score } = film
    const setId = index + 1
    return { title, description, release_date, rt_score, setId } 
  })
  return updatedData
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
  console.log('species', species)
  return species.name
  // return name
}

export const fetchLocations = async () => {
  const response = await fetch('https://ghibliapi.herokuapp.com/locations')
  const data = await response.json()
  const filteredData = data.filter(location => {
    return location.climate !== 'TODO'
  })
  console.log('locations', filteredData)
  return filteredData
}

export const fetchVehicles = async () => {
  const response = await fetch('https://ghibliapi.herokuapp.com/vehicles')
  const vehicles = await response.json()
  console.log('vehicles', vehicles)
  return vehicles
}


