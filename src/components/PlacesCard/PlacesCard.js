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
import {IoIosStarOutline} from "react-icons/io";



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

export const PlacesCard = ({ climate, name, terrain, toggleAddLocation }) => {
  return (
    <section className='places-card'>
      <h3 className='place-name'>Name: {name}</h3>
      <div className='place-details'>
        <h4>Climate: {climate}</h4>
        <h4>Terrain: {terrain}</h4>
        <img src={placeIcons[terrain]} />
        <button onClick={() => toggleAddLocation({ climate, name, terrain })}><IoIosStarOutline /></button>
      </div>
    </section>
  )
}

const mapDispatchToProps = dispatch => ({
  toggleAddLocation: location => dispatch( toggleAddLocation(location))
})

export default connect(null, mapDispatchToProps)(PlacesCard)