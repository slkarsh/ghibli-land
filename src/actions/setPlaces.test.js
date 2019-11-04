import * as actions from '../actions'

describe('set people actions', () => {
  it('should have a type of SET_PEOPLE and places as a payload', () => {
    const places = {
      name: 'earth',
      climate: 'varies',
      terrain: 'lots'
    }
    
    const expectedAction = {
      type: 'SET_PLACES',
      places
    }

    expect(actions.setPlaces(places)).toEqual(expectedAction)
  })
})