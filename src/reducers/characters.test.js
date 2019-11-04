import { characters } from '../reducers/characters'

describe('characters', () => {
  it('should return the initial state', () => {
    const expected = []

    const result = characters(undefined, {})

    expect(result).toEqual(expected)
  })

  it('should return state with an array of people objects', () => {
    const peopleArray = [
      {
        name: 'Sara',
        age: '27',
        gender: 'female',
        species: 'human'
      },
      {
        name: 'Oliver',
        age: '1.5',
        gender: 'male',
        species: 'dog'
      }
    ]

    const mockAction = {
      type: 'SET_PEOPLE',
      people: peopleArray
    }

    const result = characters(undefined, mockAction)

    expect(result).toEqual(peopleArray)
  })
})



