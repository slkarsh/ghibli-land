import React, { Component } from 'react'
import './UserForm.scss'

class UserForm extends Component {
  constructor() {
    super();
    this.state = {
      title: '',
      plot: ''
    }
  }
  
  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
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
      </section>
    )
  }
}



export default UserForm