import React from 'react'

export const CharacterCard = ({ name, age, gender, species }) => {
  return (
    <section className='character-card'>
      <h3>Name: {name}</h3>
      <h4>Age: {age}</h4>
      <h4>Gender: {gender}</h4>
      <p className='species-info'>
        Species: {species}
      </p>

    </section>
  )
}

export default CharacterCard