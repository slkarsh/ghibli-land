import React from 'react'
import './VehicleCard.scss'
import { toggleAddVehicle } from '../../actions'
import { connect } from 'react-redux'
import {IoIosStarOutline} from "react-icons/io";

export const VehicleCard = ({ name, description, vehicle_class, toggleAddVehicle }) => {
  return (
    <div className='vehicle-card'>
      <h3>Name: {name}</h3>
      <h4>Vehicle Class: {vehicle_class}</h4>
      <p className='vehicle-description'>{description}</p>
      <button onClick={() => toggleAddVehicle({ name, description, vehicle_class})}><IoIosStarOutline /></button>
    </div>
  )
}

const mapDispatchToProps = dispatch => ({
  toggleAddVehicle: vehicle => dispatch( toggleAddVehicle(vehicle) )
})

export default connect(null, mapDispatchToProps)(VehicleCard)