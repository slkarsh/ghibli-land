import React from 'react'


export const MovieCard = ({ title, description, release_date, rt_score}) => {
  return (
    <section>
      <h3>{title}</h3>
      <p className='description'>{description}</p>
      <p className='date'>{release_date}</p>
      <p className='score'>{rt_score}</p>
    </section>
  )
}

export default MovieCard