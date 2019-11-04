import React from 'react'
import { connect } from 'react-redux'
import VehicleCard from '../VehicleCard/VehicleCard'
import './VehiclesContainer.scss'

export const VehiclesContainer = ( { vehicles, checkVehicles } ) => {
  const displayVehicles = vehicles.map((vehicle, index) => {
    return (
      <VehicleCard 
        {...vehicle}
        key={index}
        checkVehicles={checkVehicles}
      />
    )
  })

  return (
    <section className='vehicles-container'>
      {displayVehicles}
    </section>
  )
}

export const mapStateToProps = state => ({
  vehicles: state.vehicles
})

export default connect(mapStateToProps)(VehiclesContainer)