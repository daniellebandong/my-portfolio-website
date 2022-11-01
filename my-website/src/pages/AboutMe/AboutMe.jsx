import React from 'react'

import NavBar from '../../components/NavBar/NavBar'
import Biography from '../../components/Biography/Biography'
import Skills from '../../components/Skills/Skills'
import './aboutMeStyles.scss'

const AboutMe = () => {
    return ( 
        <div>
            <NavBar/>
            <Biography/>
            <Skills/>
        </div>
     );
}
 
export default AboutMe;
