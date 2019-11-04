import { error } from '../reducers/error'

describe('error', () => {
  it('should return the initial state', () => {
    const expected = ''

    const result = error(undefined, {})

    expect(result).toEqual(expected)
  })

  it('should return state with a string if there is an error', () => {
    const message = 'there was an error'

    const mockAction = {
      type: 'HAS_ERRORED',
      message
    }

    const result = error(undefined, mockAction)

    expect(result).toEqual(message)
  })
})