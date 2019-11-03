import React from 'react'
import './CharacterCard.scss'
import human from '../../images/avatar-small.png'
import deer from '../../images/deer-small.png'
import god from '../../images/god-small.png'
import totoro from '../../images/totoro-small.png'
import cat from '../../images/cat-small.png'
import { toggleAddCharacter } from '../../actions'
import { connect } from 'react-redux'

const icons = {
  Human: human,
  Deer: deer,
  God: god,
  Totoro: totoro,
  Cat: cat
}

export const CharacterCard = ({ name, age, gender, species, toggleAddCharacter, checkCharacters }) => {
  const buttonHandler = checkCharacters(name) ? 'Remove From Your Cast' : 'Add To Your Cast'
  return (
    <section className='character-card'>
      <div className='character-id-info'>
        <h3 className='character-name'>{name}</h3>
        <br />
        <img className='species-icon' src={icons[species]}/>
        <button className='character-button' onClick={() => toggleAddCharacter({ name, age, gender, species })}>{buttonHandler}</button>
      </div>
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

const mapStateToProps = state => ({
  diyMovie: state.diyMovie
})

const mapDispatchToProps = dispatch => ({
  toggleAddCharacter: character => dispatch ( toggleAddCharacter(character) )
})

export default connect(mapStateToProps, mapDispatchToProps)(CharacterCard)