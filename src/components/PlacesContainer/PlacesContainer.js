import React from 'react'
import { connect } from 'react-redux'
import PlacesCard from '../PlacesCard/PlacesCard'
import './PlacesContainer.scss'
import PropTypes from 'prop-types'

export const PlacesContainer = ({ places, checkPlaces }) => {
  const displayPlaces = places.map((place, index) => {
    return (
      <PlacesCard 
        {...place}
        key={index}
        checkPlaces={checkPlaces}
      />
    )
  })

  return (
    <section className='places-container'>
      {displayPlaces}
    </section>
  )
}

export const mapStateToProps = state => ({
  places: state.places
})

export default connect(mapStateToProps)(PlacesContainer)

PlacesContainer.propTypes = {
  places: PropTypes.array,
  checkPlaces: PropTypes.func
}