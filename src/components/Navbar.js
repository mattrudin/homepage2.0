import React from 'react'
import './Navbar.css'

const Navbar = props => (
    <nav className="navbar" >
        <a href="#home">
            <span>Home</span>    
        </a>
        <a href="#portfolio">
            <span>Portfolio</span>
        </a>
        <a href="#about">
            <span>About</span>
        </a>
    </nav>
)

export default Navbar