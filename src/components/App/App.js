import React, { Component } from 'react';
import './App.scss';
import { Route } from 'react-router-dom';
import { setMovies, setPeople, setPlaces, setVehicles, addCharacter, addLocation, addVehicle } from '../../actions'
import { connect } from 'react-redux'
import { fetchFilms, getPeople, fetchLocations, fetchVehicles } from '../../apiCalls'
import NavBar from '../NavBar/NavBar'
import CharactersContainer from '../CharactersContainer/CharactersContainer'
import PlacesContainer from '../PlacesContainer/PlacesContainer'
import MovieContainer from '../MovieContainer/MovieContainer'
import VehiclesContainer from '../VehiclesContainer/VehiclesContainer'


class App extends Component {
  constructor() {
    super()
    this.state = {

    }
  }

  async componentDidMount() {
    const { setMovies, setPeople, setPlaces, setVehicles } = this.props
    try {
      const movies = await fetchFilms()
      // console.log('movies', movies)
      setMovies(movies)
      const peopleInfo = await getPeople()
      setPeople(peopleInfo)
      const places = await fetchLocations()
      setPlaces(places)
      const vehicles = await fetchVehicles()
      setVehicles(vehicles)
     
    } catch (error) {
      console.log(error)
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

  // handleAdd = (categoryType, featureObj) => {
  //   const { diyMovie, addCharacter } = this.props
  //   const isPresent = diyMovie[categoryType].find(category => {
  //     return diyMovie[category].name === featureObj.name
  //   })
  //   if (!isPresent) {
  //     addCharacter(featureObj) || addVehicle(featureObj) || addLocation(featureObj)
  //   } else {
  //     console.log('sara this did not work')
  //   }
  // }

  render() {
    return (
      <section className='app-whole'>
      <h1>Hellooooo</h1>
      <NavBar />
      <Route path='/movies' render={() => <MovieContainer />} />
      <Route path='/characters' render={() => <CharactersContainer checkCharacters={this.checkCharacters}  />} />
      <Route path='/places' render={() => <PlacesContainer checkPlaces={this.checkPlaces} />} />
      <Route path='/vehicles' render={() => <VehiclesContainer checkVehicles={this.checkVehicles} />} />
      
        {/* <Route exact path='/login' render={() => <LoginForm />} />
        <Route exact path='/movie/:id' render={({ match }) => <MovieInfo id={match.params} />} />
        <Route exact path='/favorites' render={() => <FavoritesContainer handleFavorite={this.handleFavorite} checkFavorites={this.checkFavorites} />} />
      {displayCards} */}
    </section>
    )
  }
}

const mapStateToProps = state => ({
diyMovie: state.diyMovie
})

const mapDispatchToProps = dispatch => ({
  setMovies: movies => dispatch( setMovies(movies) ),
  setPeople: people => dispatch( setPeople(people) ),
  setPlaces: places => dispatch( setPlaces(places) ),
  setVehicles: vehicles => dispatch( setVehicles(vehicles) )
})



export default connect(mapStateToProps, mapDispatchToProps)(App);
