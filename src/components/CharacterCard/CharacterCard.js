import React from 'react'

export const CharacterCard = (character) => {
  return (
    <section className='character-card'>
      <h3>Name: {character[0]}</h3>
      <h4>Age: {character[1]}</h4>
      <h4>Gender: {character[2]}</h4>
      <p className='species-info'>
        Species: {character[3]}
      </p>

    </section>
  )
}

export default CharacterCard