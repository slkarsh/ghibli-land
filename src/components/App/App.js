import React, { Component } from 'react';
import './App.scss';
import { Route } from 'react-router-dom';
import { setMovies } from '../../actions'
import { connect } from 'react-redux'
import { fetchFilms, getPeople } from '../../apiCalls'
import NavBar from '../NavBar/NavBar'
// import MovieCard from '../MovieCard/MovieCard'
import MovieContainer from '../MovieContainer/MovieContainer'


class App extends Component {
  constructor() {
    super()
    this.state = {

    }
  }

  async componentDidMount() {
    const { setMovies } = this.props
    try {
      const movies = await fetchFilms()
      setMovies(movies)
      const peopleInfo = await getPeople()
      console.log('people fetch', peopleInfo)
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
        {/* <Route exact path='/login' render={() => <LoginForm />} />
        <Route exact path='/movie/:id' render={({ match }) => <MovieInfo id={match.params} />} />
        <Route exact path='/favorites' render={() => <FavoritesContainer handleFavorite={this.handleFavorite} checkFavorites={this.checkFavorites} />} />
      {displayCards} */}
    </>
    )
  }
}

const mapStateToProps = state => ({
  movies: state.movies
})

const mapDispatchToProps = dispatch => ({
  setMovies: movies => dispatch( setMovies(movies) )
})



export default connect(mapStateToProps, mapDispatchToProps)(App);
