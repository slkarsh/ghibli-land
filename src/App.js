import React, { Component } from 'react';
import logo from './logo.svg';
import './App.scss';
import { Route } from 'react-router-dom';
import { fetchFilms, fetchSpirits, fetchSpecies, fetchPeople, fetchLocations } from './apiCalls'

class App extends Component {
  constructor() {
    super()
    this.state = {

    }
  }

  async componentDidMount() {
    try {
      await fetchFilms()
      await fetchSpirits()
      // await fetchSpecies()
      // await fetchPeople()
      // await fetchLocations()
    } catch (error) {
      console.log(error)
    }
  }

  render() {
    return (
      <h1>Hellooooo</h1>
    )
  }
}


export default App;
