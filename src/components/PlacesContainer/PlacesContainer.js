import React from 'react'
import { connect } from 'react-redux'
import PlacesCard from '../PlacesCard/PlacesCard'
import './PlacesContainer.scss'

export const PlacesContainer = ({ places }) => {
  const displayPlaces = places.map((place, index) => {
    return (
      <PlacesCard 
        {...place}
        key={index}
      />
    )
  })

  return (
    <section className='places-container'>
      {displayPlaces}
    </section>
  )
}

const mapStateToProps = state => ({
  places: state.places
})

export default connect(mapStateToProps)(PlacesContainer)