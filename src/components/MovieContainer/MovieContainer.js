import React from 'react'
import { connect } from 'react-redux'
import MovieCard from '../MovieCard/MovieCard'
import './MovieContainer.scss'

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
    <main className='movie-container'>
      {display}
    </main>
  )
}

 export const mapStateToProps = state => ({
  movies: state.movies
})

export default connect(mapStateToProps)(MovieContainer)