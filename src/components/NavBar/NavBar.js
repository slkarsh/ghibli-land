import React from 'react';
import { Link } from 'react-router-dom'
import './NavBar.scss'


export const NavBar = () => {
  return (
  <nav className='nav-bar'>
    <ul className='ul-nav-list'>
      <Link to='/movies'>
        <li className='nav-list-item'>Movies</li>
      </Link>
      <Link to='/characters'>
        <li className='nav-list-item'>Characters</li> 
      </Link>
      <Link to='/places'>
        <li className='nav-list-item'>Places</li>
      </Link>
      <Link to='/vehicles'>
        <li className='nav-list-item'>Vehicles</li>
      </Link>
      <Link to='/design'>
        <li className='nav-list-item'>Design Your Own</li>
      </Link>
    </ul>
  </nav>
  )
}

export default NavBar