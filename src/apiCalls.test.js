import { fetchFilms, fetchSpecies, fetchLocations, fetchVehicles } from './apiCalls'

describe('fetchFilms', () => {
  const mockResponse = [
    {
      description: 'a plot',
      release_date: '2001',
      director: 'Hayao Miyazaki',
      rt_score: '95',
      title: 'a title'
    },
    {
      description: 'a film',
      release_date: '2002',
      director: 'your mom',
      rt_score: '12',
      title: 'this is embarrassing'
    }
  ]

  beforeEach(() => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: true,
        json: () => Promise.resolve(mockResponse)
      })
    })
  })

  it('should fetch film data, filter out directors that are not Hayao Miyazaki, and add a setId of the films index in the array + 1', () => {
    const expectedResult = [
      {
        description: 'a plot',
        release_date: '2001',
        rt_score: '95',
        title: 'a title',
        setId: 1
      }
    ]

    expect(fetchFilms()).resolves.toEqual(expectedResult)
  })

  it('should return an error if the response is not ok', () => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: false
      })
    })

    expect(fetchFilms()).rejects.toEqual(Error('There was an error loading this information'))
  })

  it('should return an error if the promise rejects', () => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.reject(Error('fetch failed'))
    })

    expect(fetchFilms()).rejects.toEqual(Error('fetch failed'))
  })
})

describe('fetchSpecies', () => {
  const mockResponse = [
    {
      id: '1',
      name: 'human',
      classification: 'mammal',
      eye_colors: 'blue, brown'
    },
    {
      id: '2',
      name: 'cat',
      classification: 'mammal',
      eye_colors: 'green, yellow'
    }
  ]

  beforeEach(() => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        json:() => Promise.resolve(mockResponse)
      })
    })
  })

  it('should return an array of species names', () => {
    const expectedResult = [
      {name: 'human'},
      {name: 'cat'}
    ]

    expect(fetchSpecies()).resolves.toEqual(expectedResult)
  })

  it('should throw an error if the response is not ok', () => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: false
      })
    })

    expect(fetchSpecies()).rejects.toEqual(Error('There was an error loading this information'))
  })

  it('should return an error if the promise rejects', () => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.reject(Error('fetch failed'))
    })

    expect(fetchSpecies()).rejects.toEqual(Error('fetch failed'))
  })
})

describe('fetchLocations', () => {
  const mockResponse = [
    {
      name: 'earth',
      climate: 'varies',
      terrain: 'lots of it'
    },
    {
      name: 'mars',
      climate: 'TODO',
      terrain: 'rocky'
    },
    {
      name: 'moon',
      climate: 'cold',
      terrain: 'rocky'
    }
  ]

  beforeEach(() => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        json:() => Promise.resolve(mockResponse)
      })
    })
  })

  it('should return an array of locations data with any objects with TODO as the value for climate filtered out', () => {
    const expectedResult = [
      {
        name: 'earth',
        climate: 'varies',
        terrain: 'lots of it'
      },
      {
        name: 'moon',
        climate: 'cold',
        terrain: 'rocky'
      }
    ]

    expect(fetchLocations()).resolves.toEqual(expectedResult)
  })

  it('should throw an error if the response is not ok', () => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: false
      })
    })

    expect(fetchLocations()).rejects.toEqual(Error('There was an error loading this information'))
  })

  it('should return an error if the promise rejects', () => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.reject(Error('fetch failed'))
    })

    expect(fetchSpecies()).rejects.toEqual(Error('fetch failed'))
  })
})

describe('fetchVehicles', () => {
  const mockResponse = [
    {
      name: 'boeing',
      type: 'plane',
      description: 'perhaps not the safest at the moment'
    },
    {
      name: 'titanic',
      type: 'boat',
      description: 'there was room for jack'
    }
  ]

  beforeEach(() => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        json: () => Promise.resolve(mockResponse)
      })
    })
  })

  it('should return an array of vehicle objects', () => {
    const expected = [
      {
        name: 'boeing',
        type: 'plane',
        description: 'perhaps not the safest at the moment'
      },
      {
        name: 'titanic',
        type: 'boat',
        description: 'there was room for jack'
      }
    ]

    expect(fetchVehicles()).resolves.toEqual(expected)
  })

  it('should throw an error if the response is not ok', () => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: false
      })
    })
    expect(fetchVehicles()).rejects.toEqual(Error('There was an error loading this information'))
  })

  it('should return an error if the promise rejects', () => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.reject(Error('fetch failed'))
    })

    expect(fetchVehicles()).rejects.toEqual(Error('fetch failed'))
  })
})

