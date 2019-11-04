import React, { Component } from 'react'
import './UserForm.scss'
import { connect } from 'react-redux'
import { addTitleAndPlot } from '../../actions'

class UserForm extends Component {
  constructor() {
    super();
    this.state = {
      title: '',
      plot: '',
      score: null
    }
  }
  
  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  submitForm = e => {
    const { title, plot } = this.state
    const { diyMovie, addTitleAndPlot } = this.props
    console.log('made it to submit form')
    if (title === '' || plot === '' || diyMovie.characters.length === 0 || diyMovie.locations.length === 0 || diyMovie.vehicles.length === 0) {
      e.preventDefault()
      this.setState({score: 0})
      console.log('0', this.state.score)
    }
    else {
      console.log('helloooo')
      this.getScore()
      addTitleAndPlot(this.state)
    }
  }

  getScore = () => {
    console.log('get score was called')
    let randomScore =  Math.floor((Math.random() * 50))
    console.log('random score', randomScore)
    this.setState({score: randomScore})
    return randomScore
  }

  clearInputs = () => {
    this.setState({
      title: '',
      plot: '',
      score: null
    })
  }

  render() {
    return (
      <section className='form-section'>
        <form className='user-form'>
          <input
            name='title'
            value={this.state.title}
            onChange={this.handleChange}
            placeholder='Name your movie'
            className='title-input'
           />
           <textarea
            rows='30'
            columns='100'
            name='plot'
            value={this.state.plot}
            onChange={this.handleChange}
            placeholder='Describe the plot'
            className='plot-input'
           />
        </form>
        <button className='submit-button' onClick={(e) => this.submitForm(e)}>See Your Rotten Tomatoes Score!</button>
        {this.state.score && <div className='movie-score'>{this.state.score}</div>}
        {!this.state.score && <div className='movie-score'>Make sure you have added all the information to make a film!</div>}
      </section>
    )
  }
}

const mapStateToProps = state => ({
  diyMovie: state.diyMovie
})

const mapDispatchToProps = dispatch => ({
  addTitleAndPlot: (inputInfo) => dispatch(addTitleAndPlot(inputInfo))
})

export default connect(mapStateToProps, mapDispatchToProps)(UserForm)