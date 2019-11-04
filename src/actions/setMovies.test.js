import * as actions from '../actions'

describe('set movies actions', () => {
  it('should have a type of SET_MOVIES and movies as a payload', () => {
    const movies = {
      title: 'Spirited Away',
      description: 'girls parents turn into pigs',
      release_date: '1989',
      rt_score: 89
    }

    const expectedAction = {
      type: 'SET_MOVIES',
      movies
    }

    expect(actions.setMovies(movies)).toEqual(expectedAction)
  })
})