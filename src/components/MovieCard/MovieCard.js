import React from 'react'
import './MovieCard.scss'

const pics = {
  1:'https://image.tmdb.org/t/p/w1280/4RTG2AaqZ9eleL51ryWwv78WwDu.jpg',
  2:'https://image.tmdb.org/t/p/w1280/rtGDOeG9LzoerkDGZF9dnVeLppL.jpg',
  3:'https://image.tmdb.org/t/p/w1280/3LvTAZayVIWke8XDmiwNR6cX6EP.jpg',
  4:'https://image.tmdb.org/t/p/w1280/d8J98dLZkfTpJY64VvtCOH2UkXP.jpg',
  5:'https://image.tmdb.org/t/p/w1280/mNqZOtJIQfFQPjo3hmYLIn8Qqhf.jpg',
  6:'https://image.tmdb.org/t/p/w1280/oRvMaJOmapypFUcQqpgHMZA6qL9.jpg',
  7:'https://image.tmdb.org/t/p/w1280/iMarB2ior30OAXjPa7QIdeyUfM1.jpg',
  8:'https://image.tmdb.org/t/p/w1280/3s0mpSpLkI7cIhqWGrGbsiyvlsH.jpg',
  9:'https://image.tmdb.org/t/p/w1280/3OTcCyf7QbGdVxsS8GLtaSsTZtP.jpg'
}

export const MovieCard = ({ title, description, release_date, rt_score, setId}) => {
  return (
    <section className='movie-card'>
      <img
        src={pics[setId]}
        className='poster-image'
        alt={`movie poster`}
      />
      <h3>{title}</h3>
      <p className='description'>{description}</p>
      <p className='date'>Released in: {release_date}</p>
      <p className='score'>Rotten Tomatoes: {rt_score}%</p>
    </section>
  )
}

export default MovieCard