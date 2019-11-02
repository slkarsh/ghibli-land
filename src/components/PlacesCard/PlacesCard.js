import React from 'react'
import './PlacesCard.scss'

export const PlacesCard = ({ climate, name, terrain }) => {
  return (
    <section className='places-card'>
      <h3 className='place-name'>Name: {name}</h3>
      <div className='place-details'>
        <h4>Climate: {climate}</h4>
        <h4>Terrain: {terrain}</h4>
      </div>
    </section>
  )
}

export default PlacesCard