import React from 'react'
import { connect } from 'react-redux'
import MovieCard from '../MovieCard/MovieCard'

export const MovieContainer = ({ movies }) => {
  const display = movies.map((movie, index) => {
    return(
          <MovieCard
            {...movie}
            key={index}
          />
        )
  })

  return (
    <section className='movie-container'>
      {display}
    </section>
  )
}

const mapStateToProps = state => ({
  movies: state.movies
})

export default connect(mapStateToProps)(MovieContainer)