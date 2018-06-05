import React from 'react'
import Link from 'gatsby-link'

import './navbar.css'

const Navbar = () => {
    return (
        <nav className="main-nav">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            </ul>
        </nav>
    )
}

export default Navbar
