import React, { Component } from 'react'
import './UserForm.scss'
import { connect } from 'react-redux'
import { addTitleAndPlot } from '../../actions'
import PropTypes from 'prop-types'

export class UserForm extends Component {
  constructor() {
    super();
    this.state = {
      title: '',
      plot: '',
      score: 0
    }
  }
  
  handleChange = e => {
    e.preventDefault()
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
    }
    else {
      this.getScore()
      addTitleAndPlot(this.state)
      // this.clearInputs()
    }
  }

  getScore = () => {
    let randomScore =  Math.floor((Math.random() * 50))
    console.log('random score', randomScore)
    this.setState({score: randomScore})
    console.log('score', this.state.score)
    return randomScore
  }

  clearInputs = () => {
    this.setState({
      title: '',
      plot: '',
      score: 0
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
        {this.state.score !== 0 && <div className='movie-score'>{this.state.score}</div>}
        {this.state.score === 0 && <div className='movie-score'>Make sure you have added all the information to make a film!</div>}
      </section>
    )
  }
}

export const mapStateToProps = state => ({
  diyMovie: state.diyMovie
})

export const mapDispatchToProps = dispatch => ({
  addTitleAndPlot: (inputInfo) => dispatch(addTitleAndPlot(inputInfo))
})

export default connect(mapStateToProps, mapDispatchToProps)(UserForm)

UserForm.propTypes = {
  title: PropTypes.string,
  plot: PropTypes.string,
  diyMovie: PropTypes.object,
  addTitleAndPlot: PropTypes.func,
  submitForm: PropTypes.func,
  handleChange: PropTypes.func,
  getScore: PropTypes.func,
  clearInputs: PropTypes.func
}