import * as actions from '../actions'

describe('error action', () => {
  it('should have a type of HAS_ERRORED and a message as payload', () => {
    const message = 'error retrieving data'
    const expectedAction = {
      type: 'HAS_ERRORED',
      message
    }

    expect(actions.hasErrored(message)).toEqual(expectedAction)
  })
})