import * as actions from '../actions'

describe('set people actions', () => {
  it('should have a type of SET_PEOPLE and a payload of people', () => {
    const people = {
      name: 'Sara',
      age: 27,
      gender: 'female'
    }

    const expectedAction = {
      type: 'SET_PEOPLE',
      people
    }

    expect(actions.setPeople(people)).toEqual(expectedAction)
  })
})