import React from 'react'
import { connect } from 'react-redux'
import MovieCard from '../../components/MovieCard/MovieCard'
import './MovieContainer.scss'
import PropTypes from 'prop-types'

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

MovieContainer.propTypes = {
  movies: PropTypes.array
}