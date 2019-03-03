import React from 'react'

import AboutPage from './AboutPage'
import AboutMe from './AboutMe'

const About = props => (
    <section id="about">
        <AboutPage className='wrapper'/>
        <AboutMe className='wrapper'/>
    </section>
)

export default About