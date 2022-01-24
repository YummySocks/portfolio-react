import React from 'react';
import me from '../images/Me.jpeg'
function AboutContainer () {
    return (
        <div>
            <h1>About Me</h1>
            <p >
            Full-Stack web developer Recently earned a certificate in full stack development from the
Georgia Tech Boot camp, with newly developed skills in JavaScript, CSS, React.js, and responsive web design. Known for being passionate about building web-apps. Most recent project was I delivered a MERN E-commerce website with a team of four. I’m very excited to leverage my skills in a real world team with a quality driven mindset.

            </p>
            <img id="me" src={me} alt="my face"></img>
        </div>
    )
}

export default AboutContainer