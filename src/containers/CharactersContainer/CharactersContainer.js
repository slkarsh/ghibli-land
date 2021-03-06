import React from 'react'
import { connect } from 'react-redux'
import CharacterCard from '../CharacterCard/CharacterCard'
import './CharactersContainer.scss'
import PropTypes from 'prop-types'

export const CharactersContainer = ({ characters, checkCharacters }) => {
  const displayCards = characters.map((character, index) => {
    return (
      <CharacterCard
        {...character}
        key={index}
        className='character'
        checkCharacters={checkCharacters}
       />
    )
  })

  return (
    <section className='character-container'>
      {displayCards}
    </section>
  )
}

export const mapStateToProps = state => ({
  characters: state.characters
})

export default connect(mapStateToProps)(CharactersContainer)

CharactersContainer.propTypes = {
  characters: PropTypes.array,
  checkCharacters: PropTypes.func
}