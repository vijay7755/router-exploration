import React from 'react'
import Team from './../Team/Team'


function About(props) {
    console.log("about props: ",props)
    return (
        <div>
            <div>About Page</div>
            <Team />
        </div>
    )
}

export default About
