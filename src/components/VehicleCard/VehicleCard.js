import React from 'react'
import './VehicleCard.scss'
import { toggleAddVehicle } from '../../actions'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

const images = {
  Airship: 'https://steamuserimages-a.akamaihd.net/ugc/800921761784638066/E000FAC38E199977DA4A399F9DCEAE53C4134D14/',
  Airplane: 'http://4.bp.blogspot.com/-9LYF-rZrRkE/TbQPOOPWumI/AAAAAAAAAAM/gHcCg6K0KxA/s1600/porco_rosso_movie_image_01.jpg',
  Boat: 'https://vignette.wikia.nocookie.net/studio-ghibli/images/b/b7/Sosuke_in_boat.png/revision/latest?cb=20181024030411'

}

export const VehicleCard = ({ name, description, vehicle_class, toggleAddVehicle, checkVehicles }) => {
  const buttonHandler = checkVehicles(name) ? 'Remove From Your Plot' : 'Add To Your Plot'
  return (
    <div className='vehicle-card'>
      <img src={images[vehicle_class]} />
      <h3>Name: {name}</h3>
      <h4>Vehicle Class: {vehicle_class}</h4>
      <p className='vehicle-description'>{description}</p>
      <button className='vehicle-button' onClick={() => toggleAddVehicle({ name, description, vehicle_class})}>{buttonHandler}</button>
    </div>
  )
}

const mapStateToProps = state => ({
  diyMovie: state.diyMovie
})

const mapDispatchToProps = dispatch => ({
  toggleAddVehicle: vehicle => dispatch( toggleAddVehicle(vehicle) )
})

export default connect(mapStateToProps, mapDispatchToProps)(VehicleCard)

VehicleCard.propTypes = {
  diyMovie: PropTypes.object,
  toggleAddVehicle: PropTypes.func,
  name: PropTypes.string,
  description: PropTypes.string,
  vehicle_class: PropTypes.string,
  checkVehicles: PropTypes.func
}