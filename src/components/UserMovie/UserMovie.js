import React from 'react'
import UserForm from '../UserForm/UserForm'
import { connect } from 'react-redux'
import CharacterCard from '../CharacterCard/CharacterCard'
import VehicleCard from '../VehicleCard/VehicleCard'
import PlacesCard from '../PlacesCard/PlacesCard'

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
        <h4 className='characters'>Starring: </h4> 
          {displayCharacters}
        <br />
        <h4 className='locations'>At: </h4>
          {displayLocations}
        <br />
        <h4 className='vehicles'>Featuring: </h4>
          {displayVehicles}
      </section>
    </main>

  )
}

const mapStateToProps = state => ({
  diyMovie: state.diyMovie
})

export default connect(mapStateToProps)(UserMovie)