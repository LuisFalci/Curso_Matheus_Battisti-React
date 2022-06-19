import React from 'react'
import { Link } from 'react-router-dom';

import './Navbar.css'

const navbar = () => {
  return (
    <nav>
        <Link to="/">Home</Link>
        <Link to="/about">Sobre</Link>
    </nav>
  )
}

export default navbar