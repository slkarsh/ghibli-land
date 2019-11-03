import React from 'react'
import { connect } from 'react-redux'
import CharacterCard from '../CharacterCard/CharacterCard'
import './CharactersContainer.scss'

export const CharactersContainer = ({ characters, handleAdd }) => {
  const displayCards = characters.map((character, index) => {
    return (
      <CharacterCard
        {...character}
        key={index}
        className='character'
        handleAdd={handleAdd}
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