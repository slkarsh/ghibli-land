import React from 'react'
import './VehicleCard.scss'

export const VehicleCard = ({ name, description, vehicle_class }) => {
  return (
    <div className='vehicle-card'>
      <h3>Name: {name}</h3>
      <h4>Vehicle Class: {vehicle_class}</h4>
      <p className='vehicle-description'>{description}</p>
    </div>
  )
}

export default VehicleCard