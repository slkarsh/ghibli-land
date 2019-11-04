import * as actions from '../actions'

describe('set vehicles actions', () => {
  it('should have a type of SET_VEHICLES and vehicles as a payload', () => {
    const vehicles = {
      name: 'airplane',
      type: 'airplane',
      description: 'a thing that flies'
    }

    const expectedAction = {
      type: 'SET_VEHICLES',
      vehicles
    }

    expect(actions.setVehicles(vehicles)).toEqual(expectedAction)
  })
})