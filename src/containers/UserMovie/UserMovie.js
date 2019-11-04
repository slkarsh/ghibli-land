import React from 'react'
import UserForm from '../UserForm/UserForm'
import { connect } from 'react-redux'
import CharacterCard from '../CharacterCard/CharacterCard'
import VehicleCard from '../VehicleCard/VehicleCard'
import PlacesCard from '../PlacesCard/PlacesCard'
import { toggleAddCharacter, toggleAddLocation, toggleAddVehicle } from '../../actions'
import './UserMovie.scss'
import PropTypes from 'prop-types'

export const UserMovie = ({ diyMovie, checkCharacters, checkPlaces, checkVehicles }) => {
  const displayLocations = diyMovie.locations.map(location => {
    return (
      <PlacesCard
        {...location}
        checkPlaces={checkPlaces}
       />
    )
  })

  const displayCharacters = diyMovie.characters.map(character => {
    return (
      <CharacterCard
        {...character}
        checkCharacters={checkCharacters}
      />
    )
  })

  const displayVehicles = diyMovie.vehicles.map(vehicle => {
    return (
      <VehicleCard 
        {...vehicle}
        checkVehicles={checkVehicles}
      />
    )
  })

  return (
    <main className='user-choices-main'>
      <section className='user-form-container'>
        <UserForm />
      </section>
      <section className='user-cards-container'>
        <div className='user-characters'>
          <h4 className='characters'>Starring: </h4> 
            {displayCharacters}
        </div>
        <div className='user-locations'>
          <h4 className='locations'>At: </h4>
            {displayLocations}
        </div>
       <div className='user-vehicles'>
        <h4 className='vehicles'>Featuring: </h4>
          {displayVehicles}
       </div>
      </section>
    </main>

  )
}

const mapStateToProps = state => ({
  diyMovie: state.diyMovie
})

const mapDispatchToProps = dispatch => ({
  toggleAddCharacter: character => dispatch( toggleAddCharacter(character) ),
  toggleAddVehicle: vehicle => dispatch( toggleAddVehicle(vehicle) ),
  toggleAddLocation: location => dispatch( toggleAddLocation(location) )
})

export default connect(mapStateToProps, mapDispatchToProps)(UserMovie)

UserMovie.propTypes = {
  diyMovie: PropTypes.object,
  toggleAddLocation: PropTypes.func,
  toggleAddCharacter: PropTypes.func,
  toggleAddVehicle: PropTypes.func,
  checkCharacters: PropTypes.func,
  checkPlaces: PropTypes.func,
  checkVehicles: PropTypes.func
}