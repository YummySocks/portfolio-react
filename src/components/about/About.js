import React from 'react';
import "./about.scss"
import me from '../images/Me.jpeg'
function AboutContainer () {
    return (
        <div id="intro">
            <h1>About Me</h1>
            <p >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Praesent semper feugiat nibh sed pulvinar proin gravida hendrerit lectus. 
                Lectus proin nibh nisl condimentum id. Amet risus nullam eget felis eget. Morbi tincidunt ornare massa eget egestas. 
                Etiam tempor orci eu lobortis elementum nibh tellus. Posuere morbi leo urna molestie at elementum eu. Pharetra pharetra massa massa ultricies mi quis hendrerit dolor magna. 
                Sit amet mauris commodo quis imperdiet massa tincidunt nunc. Sit amet consectetur adipiscing elit ut aliquam. Sit amet volutpat consequat mauris nunc congue nisi. 
                Vestibulum morbi blandit cursus risus at ultrices mi. Congue quisque egestas diam in arcu cursus. Tempor commodo ullamcorper a lacus vestibulum.
            </p>
            <img id="me" src={me} alt="Picture of my face"></img>
        </div>
    )
}

export default AboutContainer