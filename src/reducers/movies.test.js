import { movies } from '../reducers/movies'

describe('movies', () => {
  it('should return the initial state', () => {
    const expected = []

    const result = movies(undefined, {})

    expect(result).toEqual(expected)
  })

  it('should return state with an array of movie Objects', () => {
    const mockMovies = [
      {
        title: 'some title',
        description: 'some description',
        release_date: '2001',
        rt_score: 22
      },
      {
        title: 'some other title',
        description: 'a film',
        release_date: '2003',
        rt_score: 29
      }
    ]

    const mockAction = {
      type: 'SET_MOVIES',
      movies: mockMovies
    }

    const result = movies(undefined, mockAction)

    expect(result).toEqual(mockMovies)
  })
})