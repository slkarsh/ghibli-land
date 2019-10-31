export const fetchFilms = async () => {
  const response = await fetch('https://ghibliapi.herokuapp.com/films')
  const data = await response.json()
  const filtered = data.filter(movie => {
    return movie.director.includes("Hayao Miyazaki")
  })
  console.log('films', filtered)
  return filtered
}

export const fetchSpecies = async () => {
  const response = await fetch('https://ghibliapi.herokuapp.com/species')
  const data = await response.json()
  console.log('species', data)
  return data
}

export const fetchSpirits = async () => {
  const response = await fetch('https://ghibliapi.herokuapp.com/species/74b7f547-1577-4430-806c-c358c8b6bcf5')
  const spirit = await response.json()
  console.log('spirit', spirit)
  return spirit
}

export const fetchPeople = async (url) => {
  const response = await fetch('url')
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

export const getPersonNames = (personUrl) => {
  return fetch(personUrl)
    .then(res => res.json())
    .then(person => person.name)
}

export const getPeopleNames = (peopleArray) => {
  const peopleInfo = peopleArray.map(person => {
    return getPersonNames(person)
  })
  return Promise.all(peopleInfo)
}

// export const getCharacters = filmUrl => {
//   return fetch(filmUrl)
//     .then(response => response.json())
//     .then(response => response.characters)
//     .then(response => response.splice(0, 10))
//     .then(film => {
//       const characterInfo = film.map(character => {
//         return getCharacter(character).then(character => ({
//           name: character[0],
//           homeworld: character[1],
//           species: character[2],
//           relatedFilms: character[3]
//         }))
//       })
//       return Promise.all(characterInfo)
//     })
// }

// export const getCharacter = characterUrl => {
//   return fetch(characterUrl)
//     .then(response => response.json())
//     .then(character => {
//       const { name } = character
//       const home = getHomeworld(character.homeworld)
//       const speciesName = getSpeciesData(character.species).then(x => [...x])
//       const relatedMovies = getRelatedFilms(character.films)
//       return Promise.all([name, home, speciesName, relatedMovies])
//     })
// }

// export const getHomeworld = homeworldUrl => {
//   return fetch(homeworldUrl)
//     .then(response => response.json())
//     .then(homeworld => {
//       const { name, population } = homeworld
//       return { name, population }
//     })
// }

// export const getSpeciesData = speciesArray => {
//   const speciesInfo = speciesArray.map(speciesType => {
//     return getSpecies(speciesType).then(name => name)
//   })
//   return Promise.all(speciesInfo)
// }


// export const getSpecies = speciesUrl => {
//   return fetch(speciesUrl)
//     .then(response => response.json())
//     .then(species => species.name)
// }


// export const getRelatedFilms = filmsArray => {
//   const relatedFilms = filmsArray.map(film => {
//     return getFilmName(film).then(title => title)
//   })
//   return Promise.all(relatedFilms)
// }


// export const getFilmName = filmUrl => {
//   return fetch(filmUrl)
//     .then(response => response.json())
//     .then(film => film.title)
// }