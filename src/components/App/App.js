import React, { Component } from 'react';
import './App.scss';
import { Route } from 'react-router-dom';
import { setMovies, setPeople, setPlaces } from '../../actions'
import { connect } from 'react-redux'
import { fetchFilms, getPeople, fetchLocations } from '../../apiCalls'
import NavBar from '../NavBar/NavBar'
import CharactersContainer from '../CharactersContainer/CharactersContainer'
import PlacesContainer from '../PlacesContainer/PlacesContainer'
// import MovieCard from '../MovieCard/MovieCard'
import MovieContainer from '../MovieContainer/MovieContainer'


class App extends Component {
  constructor() {
    super()
    this.state = {

    }
  }

  async componentDidMount() {
    const { setMovies, setPeople, setPlaces } = this.props
    try {
      const movies = await fetchFilms()
      setMovies(movies)
      const peopleInfo = await getPeople()
      // console.log('people fetch', peopleInfo)
      setPeople(peopleInfo)
      const places = await fetchLocations()
      // console.log('places', places)
      setPlaces(places)
      console.log('places', this.props.places)
      // await fetchSpirits()
      // await fetchSpecies()
      // await fetchPeople()
      // await fetchLocations()
    } catch (error) {
      console.log(error)
    }
  }

  render() {
    return (
      <>
      <h1>Hellooooo</h1>
      <NavBar />
      <Route path='/movies' render={() => <MovieContainer />} />
      <Route path='/characters' render={() => <CharactersContainer />} />
      <Route path='/places' render={() => <PlacesContainer />} />
      
        {/* <Route exact path='/login' render={() => <LoginForm />} />
        <Route exact path='/movie/:id' render={({ match }) => <MovieInfo id={match.params} />} />
        <Route exact path='/favorites' render={() => <FavoritesContainer handleFavorite={this.handleFavorite} checkFavorites={this.checkFavorites} />} />
      {displayCards} */}
    </>
    )
  }
}

const mapStateToProps = state => ({
  movies: state.movies,
  characters: state.characters,
  places: state.places
})

const mapDispatchToProps = dispatch => ({
  setMovies: movies => dispatch( setMovies(movies) ),
  setPeople: people => dispatch( setPeople(people) ),
  setPlaces: places => dispatch( setPlaces(places) )
})



export default connect(mapStateToProps, mapDispatchToProps)(App);
