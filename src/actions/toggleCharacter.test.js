import * as actions from '../actions'

describe('toggleAddCharacter actions', () => {
  it('should have a type of TOGGLE_ADD_CHARACTER and a payload of character', () => {
    const character = {
      name: 'Sara',
      age: '27',
      gender: 'female'
    }

    const expectedAction = {
      type: 'TOGGLE_ADD_CHARACTER',
      character
    }

    expect(actions.toggleAddCharacter(character)).toEqual(expectedAction)
  })
})