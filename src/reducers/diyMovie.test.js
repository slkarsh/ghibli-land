import { diyMovie } from '../reducers/diyMovie'

describe('diyMovie', () => {
  it('should return the initial state', () => {
    const expected = {
      characters: [],
      locations: [],
      vehicles: [],
      title: '',
      plot: '',
      score: null
    }

    const result = diyMovie(undefined, {})

    expect(result).toEqual(expected)
  })

  it('should return state with the characters array updated if the character does not already exist in the array', () => {
    const initialState = {
      characters: [
        {
          name: 'sara', 
          age: '27',
          gender: 'female', 
          species: 'human'
        }
      ],
      locations: [],
      vehicles: [],
      title: '',
      plot: '',
      score: null
    }

    const newCharacter = {
      name: 'Ollie',
      age: '1.5',
      gender: 'male',
      species: 'dog'
    }

    const expected = {
      characters: [
        {
          name: 'sara', 
          age: '27',
          gender: 'female', 
          species: 'human'
        },
        {
          name: 'Ollie',
          age: '1.5',
          gender: 'male',
          species: 'dog' 
        }
      ],
      locations: [],
      vehicles: [],
      title: '',
      plot: '',
      score: null
    }

    const mockAction = {
      type: 'TOGGLE_ADD_CHARACTER',
      character: newCharacter
    }

    const result = diyMovie(initialState, mockAction)

    expect(result).toEqual(expected)

  })

  it('should remove a character from the array if it already exists', () => {
    const initialState = {
      characters: [
        {
          name: 'sara', 
          age: '27',
          gender: 'female', 
          species: 'human'
        },
        {
          name: 'Ollie',
          age: '1.5',
          gender: 'male',
          species: 'dog' 
        }
      ],
      locations: [],
      vehicles: [],
      title: '',
      plot: '',
      score: null
    }

    const newCharacter = {
      name: 'Ollie',
      age: '1.5',
      gender: 'male',
      species: 'dog'
    }

    const expected = {
      characters: [
        {
          name: 'sara', 
          age: '27',
          gender: 'female', 
          species: 'human'
        }
      ],
      locations: [],
      vehicles: [],
      title: '',
      plot: '',
      score: null
    }

    const mockAction = {
      type: 'TOGGLE_ADD_CHARACTER',
      character: newCharacter
    }

    const result = diyMovie(initialState, mockAction)

    expect(result).toEqual(expected)

  })

  it('should return state with the locations array updated if the location does not already exist in the array', () => {
    const initialState = {
      characters: [],
      locations: [
        {
          name: 'earth',
          climate: 'mild',
          terrain: 'varies'
        }
      ],
      vehicles: [],
      title: '',
      plot: '',
      score: null
    }

    const newLocation = {
      name: 'moon',
      climate: 'cold',
      terrain: 'rocky'
    }

    const expected = {
      characters: [],
      locations: [
        {
          name: 'earth',
          climate: 'mild',
          terrain: 'varies'
        },
        {
          name: 'moon',
          climate: 'cold',
          terrain: 'rocky'
        }

      ],
      vehicles: [],
      title: '',
      plot: '',
      score: null
    }

    
    const mockAction = {
      type: 'TOGGLE_ADD_LOCATION',
      location: newLocation
    }

    const result = diyMovie(initialState, mockAction)

    expect(result).toEqual(expected)

  })

  it('should remove a location from the locations array if the location does already exist in the array', () => {
    const initialState = {
      characters: [],
      locations: [
        {
          name: 'earth',
          climate: 'mild',
          terrain: 'varies'
        },
        {
          name: 'moon',
          climate: 'cold',
          terrain: 'rocky'
        }

      ],
      vehicles: [],
      title: '',
      plot: '',
      score: null
    }

    const newLocation = {
      name: 'moon',
      climate: 'cold',
      terrain: 'rocky'
    }

    const mockAction = {
      type: 'TOGGLE_ADD_LOCATION',
      location: newLocation
    }

    const expected = {
      characters: [],
      locations: [
        {
          name: 'earth',
          climate: 'mild',
          terrain: 'varies'
        }
      ],
      vehicles: [],
      title: '',
      plot: '',
      score: null
    }

    const result = diyMovie(initialState, mockAction)

    expect(result).toEqual(expected)
  })

  it('should add a vehicle to the vehicles array if it is not already present', () => {
    const initialState = {
      characters: [],
      locations: [],
      vehicles: [
        {
          name: 'boeing',
          type: 'plane',
          description: 'it flies'
        }
      ],
      title: '',
      plot: '',
      score: null
    }

    const newVehicle = {
      name: 'titanic',
      type: 'boat',
      description: 'not the best boat in history'
    }

    const mockAction = {
      type: 'TOGGLE_ADD_VEHICLE',
      vehicle: newVehicle
    }

    const expected = {
      characters: [],
      locations: [],
      vehicles: [
        {
          name: 'boeing',
          type: 'plane',
          description: 'it flies'
        },
        {
          name: 'titanic',
          type: 'boat',
          description: 'not the best boat in history'
        }
      ],
      title: '',
      plot: '',
      score: null
    }

    const result = diyMovie(initialState, mockAction)

    expect(result).toEqual(expected)
  })

  it('should remove a vehicle from the vehicles array if it already exists there', () => {
    const initialState = {
      characters: [],
      locations: [],
      vehicles: [
        {
          name: 'boeing',
          type: 'plane',
          description: 'it flies'
        },
        {
          name: 'titanic',
          type: 'boat',
          description: 'not the best boat in history'
        }
      ],
      title: '',
      plot: '',
      score: null
    }

    const newVehicle = {
      name: 'titanic',
      type: 'boat',
      description: 'not the best boat in history'
    }

    const mockAction = {
      type: 'TOGGLE_ADD_VEHICLE',
      vehicle: newVehicle
    }

    const expected = {
      characters: [],
      locations: [],
      vehicles: [
        {
          name: 'boeing',
          type: 'plane',
          description: 'it flies'
        }
      ],
      title: '',
      plot: '',
      score: null
    }

    const result = diyMovie(initialState, mockAction)

    expect(result).toEqual(expected)

  })

  it('should update the title, plot, and score', () => {
    const initialState = {
      characters: [],
      locations: [],
      vehicles: [],
      title: '',
      plot: '',
      score: null
    }

    const mockTitle = 'a title'
    const mockPlot = 'a plot'
    const mockScore = 2

    const mockAction = {
      type: 'ADD_TITLE_AND_PLOT',
      title: mockTitle,
      plot: mockPlot,
      score: mockScore
    }

    const expected = {
      characters: [],
      locations: [],
      vehicles: [],
      title: 'a title',
      plot: 'a plot',
      score: 2
    }

    const result = diyMovie(initialState, mockAction)

    expect(result).toEqual(expected)
  })
})