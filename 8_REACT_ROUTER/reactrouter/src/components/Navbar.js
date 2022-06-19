import React from 'react'
import { Link, NavLink } from 'react-router-dom';

import './Navbar.css'

const navbar = () => {
  return (
    <nav>
        {/* <Link to="/">Home</Link>
        <Link to="/about">Sobre</Link> */}
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">Sobre</NavLink>
    </nav>
  )
}

export default navbar