import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { fetchFilms } from './apiCalls'

class App extends Component {
  constructor() {
    super()
    this.state = {

    }
  }

  async componentDidMount() {
    try {
      await fetchFilms()
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


// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
