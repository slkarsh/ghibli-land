import * as actions from '../actions'

describe('toggleAddVehicle actions', () => {
  it('should have a type of TOGGLE_ADD_VEHICLE and vehicle as a payload', () => {
    const vehicle = {
      name: 'super special plane',
      description: 'it flies',
      type: 'plane'
    }

    const expectedAction = {
      type: 'TOGGLE_ADD_VEHICLE',
      vehicle
    }

    expect(actions.toggleAddVehicle(vehicle)).toEqual(expectedAction)
  })
})