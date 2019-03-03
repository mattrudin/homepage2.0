import React from 'react'
import './Slider.css'

import Hero from './Hero'
import Portfolio from './Portfolio'
import About from './About'

const Slider = props => (
    <div className="slider">
        <Hero />
        <Portfolio />
        <About />
    </div>
)

export default Slider