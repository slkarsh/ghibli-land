import * as actions from '../actions'

describe('toggleAddLocation actions', () => {
  it('should have a type of TOGGLE_ADD_LOCATION and a location as a payload', () => {
    const location = {
      name: 'earth',
      climate: 'variable',
      terrain: 'lots'
    }

    const expectedAction = {
      type: 'TOGGLE_ADD_LOCATION',
      location
    }

    expect(actions.toggleAddLocation(location)).toEqual(expectedAction)
  })
})