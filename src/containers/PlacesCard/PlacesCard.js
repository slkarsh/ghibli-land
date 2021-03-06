import React from 'react'
import './PlacesCard.scss'
import mountain from '../../images/mountains.png'
import hill from '../../images/hills.png'
import plain from '../../images/field.png'
import marsh from '../../images/marsh.png'
import forest from '../../images/trees.png'
import city from '../../images/cityscape.png'
import river from '../../images/waterfall.png'
import ocean from '../../images/cyclone.png'
import { toggleAddLocation } from '../../actions'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'



const placeIcons = {
  Mountain: mountain,
  Hill: hill,
  Plain: plain,
  Marsh: marsh,
  Hill: hill,
  Forest: forest,
  City: city,
  River: river,
  Ocean: ocean
}

export const PlacesCard = ({ climate, name, terrain, toggleAddLocation, checkPlaces }) => {
  const buttonHandler = checkPlaces(name) ? 'Remove From Your Plot' : 'Add To Your Plot'
  return (
    <section className='places-card'>
      <div className='place-header-info'>
        <h3 className='place-name'>{name}</h3>
        <img className='place-icon' src={placeIcons[terrain]} />
        <button className='place-button' onClick={() => toggleAddLocation({ climate, name, terrain })}>{buttonHandler}</button>
      </div>
      <div className='place-details'>
        <h4>Climate: {climate}</h4>
        <h4>Terrain: {terrain}</h4>
      </div>
    </section>
  )
}

export const mapStateToProps = state => ({
  diyMovie: state.diyMovie
})

export const mapDispatchToProps = dispatch => ({
  toggleAddLocation: location => dispatch( toggleAddLocation(location))
})

export default connect(mapStateToProps, mapDispatchToProps)(PlacesCard)

PlacesCard.propTypes = {
  climate: PropTypes.string,
  name: PropTypes.string,
  terrain: PropTypes.string,
  toggleAddLocation: PropTypes.func,
  diyMovie: PropTypes.object,
  checkPlaces: PropTypes.func
}