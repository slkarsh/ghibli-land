import React, { Component } from 'react';
import './App.scss';
import { Route } from 'react-router-dom';
import { setMovies, setPeople, setPlaces, setVehicles, hasErrored } from '../../actions'
import { connect } from 'react-redux'
import { fetchFilms, getPeople, fetchLocations, fetchVehicles } from '../../apiCalls'
import NavBar from '../../components/NavBar/NavBar'
import CharactersContainer from '../CharactersContainer/CharactersContainer'
import PlacesContainer from '../PlacesContainer/PlacesContainer'
import MovieContainer from '../MovieContainer/MovieContainer'
import VehiclesContainer from '../VehiclesContainer/VehiclesContainer'
import UserMovie from '../UserMovie/UserMovie'
import HomeContainer from '../../components/HomeContainer/HomeContainer'
import PropTypes from 'prop-types'


export class App extends Component {

  async componentDidMount() {
    const { setMovies, setPeople, setPlaces, setVehicles } = this.props
    try {
      const movies = await fetchFilms()
      setMovies(movies)
      const peopleInfo = await getPeople()
      setPeople(peopleInfo)
      const places = await fetchLocations()
      setPlaces(places)
      const vehicles = await fetchVehicles()
      setVehicles(vehicles)
     
    } catch (error) {
      hasErrored(error.message)
    }
  }

  checkCharacters = (charName) => {
    const { diyMovie } = this.props
    let faveCharacter = diyMovie.characters.map(character => character.name)
    return faveCharacter.includes(charName)
  }

  checkPlaces = placeName => {
    const { diyMovie } = this.props
    let favePlace = diyMovie.locations.map(location => location.name)
    return favePlace.includes(placeName)
  }

  checkVehicles = vehicleName => {
    const { diyMovie } = this.props
    let faveVehicle = diyMovie.vehicles.map(vehicle => vehicle.name)
    return faveVehicle.includes(vehicleName)
  }

  render() {
    return (
      <main className='app-whole'>
      <h1 className='app-header'>Ghibli Land!</h1>
      <NavBar />
      <Route exact path='/' render={() => <HomeContainer />} />
      <Route path='/movies' render={() => <MovieContainer />} />
      <Route path='/characters' render={() => <CharactersContainer checkCharacters={this.checkCharacters}  />} />
      <Route path='/places' render={() => <PlacesContainer checkPlaces={this.checkPlaces} />} />
      <Route path='/vehicles' render={() => <VehiclesContainer checkVehicles={this.checkVehicles} />} />
      <Route path='/design' render={() => <UserMovie 
        checkCharacters={this.checkCharacters} 
        checkPlaces={this.checkPlaces} 
        checkVehicles={this.checkVehicles} />} 
      />
    </main>
    )
  }
}

export const mapStateToProps = state => ({
  diyMovie: state.diyMovie,
  error: state.error
})

export const mapDispatchToProps = dispatch => ({
  setMovies: movies => dispatch( setMovies(movies) ),
  setPeople: people => dispatch( setPeople(people) ),
  setPlaces: places => dispatch( setPlaces(places) ),
  setVehicles: vehicles => dispatch( setVehicles(vehicles) ),
  hasErrored: error => dispatch( hasErrored(error) )
})



export default connect(mapStateToProps, mapDispatchToProps)(App);

App.propTypes = {
  checkCharacters: PropTypes.func,
  checkPlaces: PropTypes.func,
  checkVehicles: PropTypes.func,
  diyMovie: PropTypes.object,
  setMovies: PropTypes.func,
  setPeople: PropTypes.func,
  setPlaces: PropTypes.func,
  setVehicles: PropTypes.func,
  hasErrored: PropTypes.func
}
