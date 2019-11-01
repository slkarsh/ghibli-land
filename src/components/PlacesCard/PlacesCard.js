import React from 'react'

export const PlacesCard = ({ climate, name, terrain }) => {
  return (
    <div className='places-card'>
      <h3>Name: {name}</h3>
      <h4>Climate: {climate}</h4>
      <h4>Terrain: {terrain}</h4>
    </div>
  )
}

export default PlacesCard