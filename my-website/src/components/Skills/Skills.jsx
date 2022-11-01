import React from 'react';
import './skillsStyles.scss'

const Skills = () => {
    return ( 
        <div>
            <h2>Skills</h2>
            <p>Below are a list of my skills I have picked up from school as well as developed on my own time. As a developer I am working on expanding this list and constantly improving on the skills I do know!</p>
            <section>
                <h3>Core Compentincies</h3>
                <ul>
                    <div>
                        <li>Object Oriented Programming</li>
                        {/* picture */}
                    </div>
                    <div>
                        <li>Front-End Development</li>
                        {/* picture */}
                    </div>
                    <div>
                        <li>Back-End Development</li>
                        {/* picture */}
                    </div>
                </ul>
            </section>
            <section>
                <h3>Programming Languages</h3>
                <ul>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>JavaScript</li>
                    <li>React.js</li>
                    <li>Node.js</li>
                    <li>PHP</li>
                    <li>.NET Framework</li>
                    <li>C#</li>
                    <li>SQL</li>
                    <li>Oracle SQL</li>
                    <li>Java</li>
                </ul>
            </section>
            <section>
                <h3>Applications</h3>
                <ul>
                    <li>Version Control(Git and GitHub)</li>
                    <li>Visual Studio Code</li>
                    <li>Visual Studio</li>
                </ul>
            </section>

        </div>
     );
}
 
export default Skills;