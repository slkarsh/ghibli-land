import React from 'react'
import { connect } from 'react-redux'
import CharacterCard from '../CharacterCard/CharacterCard'

export const CharactersContainer = ({ characters }) => {
  const displayCards = characters.map((character, index) => {
    return (
      <CharacterCard
        {...character}
        key={index}
       />
    )
  })

  return (
    <section className='character-container'>
      {displayCards}
    </section>
  )
}

const mapStateToProps = state => ({
  characters: state.characters
})

export default connect(mapStateToProps)(CharactersContainer)