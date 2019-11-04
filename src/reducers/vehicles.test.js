import { vehicles } from '../reducers/vehicles'

describe('vehicles', () => {
  it('should return the initial state', () => {
    const expected = []

    const result = vehicles(undefined, {})

    expect(result).toEqual(expected)
  })

  it('should return state with an array of vehicle objects', () => {
    const vehiclesArray = [
      {
        name: 'paper airplane',
        type: 'plane',
        description: 'a thing that flies'
      },
      {
        name: 'mazda',
        type: 'car',
        description: 'my tiny car'
      }
    ]

    const mockAction = {
      type: 'SET_VEHICLES',
      vehicles: vehiclesArray
    }

    const result = vehicles(undefined, mockAction)

    expect(result).toEqual(vehiclesArray)
  })
})