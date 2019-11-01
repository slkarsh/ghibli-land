export const fetchFilms = async () => {
  const response = await fetch('https://ghibliapi.herokuapp.com/films')
  const data = await response.json()
  const filtered = data.filter(movie => {
    return movie.director.includes("Hayao Miyazaki")
  })
  console.log('films', filtered)
  return filtered
}

export const getPeople = () => {
  return fetch('https://ghibliapi.herokuapp.com/people')
    .then(res => res.json())
    .then(people => {
      const personInfo = people.map(person => {
        const { name, age, gender } = person
        console.log("personnn", person)
        const speciesInfo = fetchSpecies(person.species)
        return Promise.all([name, age, gender, speciesInfo])
        // return Promise.all(formattedInfo)
        // return formattedInfo
      })
      return Promise.all(personInfo)
      // return personInfo
    })
}

// export const getPeople = () => {
//   return fetch('https://ghibliapi.herokuapp.com/people')
//     .then(res => res.json())
//     .then(people => {
//       const personInfo = people.map(person => {
//         const formatted = {}
//         formatted['species'] = fetchSpecies(person.species)
//         formatted['name'] = person.name
//         formatted['age'] = person.age
//         formatted['gender'] = person.gender
//         console.log('formatted', formatted)
//         return formatted
//       })
//       return Promise.all([personInfo])
//     })
// }

// export const getPeople = () => {
//   return fetch('https://ghibliapi.herokuapp.com/people')
//     .then(res => res.json())
//     .then(people => {
//       const personInfo = people.map(person => {
//         const { name, age, gender } = person
//         const speciesInfo = fetchSpecies(person.species)
//         // const { name } = species
//         return Promise.all([name, age, gender, speciesInfo])
//       })
//       return Promise.all(personInfo)
//     })
// }

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


// const fetchSpecies = speciesUrl => {
//   return fetch(speciesUrl)
//     .then(res => res.json())
//     .then(species => {
//       const { name, classification } = species
//       return { name, classification }
//     })
// }


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