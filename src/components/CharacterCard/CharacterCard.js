import React from 'react'
import './CharacterCard.scss'

export const CharacterCard = ({ name, age, gender, species }) => {
  return (
    <section className='character-card'>
      <h3 className='character-name'>{name}</h3>
      <div className='character-info'>
        <h4>Age: {age}</h4>
        <h4>Gender: {gender}</h4>
        <p className='species-info'>
          Species: {species}
        </p>
      </div>

    </section>
  )
}

export default CharacterCard