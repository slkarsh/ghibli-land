import { places } from '../reducers/places'

describe('places', () => {
  it('should return the initial state', () => {
    const expected = []

    const result = places(undefined, {})

    expect(result).toEqual(expected)
  })

  it('should return state with an array of places objects', () => {
    const placesArray = [
      {
        name: 'earth',
        climate: 'varies',
        terrain: 'lots'
      },
      {
        name: 'moon',
        climate: 'cold',
        terrain: 'seems rocky'
      }
    ]

    const mockAction = {
      type: 'SET_PLACES',
      places: placesArray
    }

    const result = places(undefined, mockAction)

    expect(result).toEqual(placesArray)
  })
})