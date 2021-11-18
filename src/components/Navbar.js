import React, { useState } from 'react';
function Navbar () {
  

    return (
        <div>
            <a href="/" class="brand-logo indigo-text text-darken-3">Patrick Sutcliffe </a>
                <ul id="nav-mobile" class="right hide-on-med-and-down">
                <li><a href="#about-me" class="indigo-text text-darken-3"> About me </a></li>
                <li><a href="#my-work" class="indigo-text text-darken-3"> Work </a></li>
                <li><a href="#contact-me" class="indigo-text text-darken-3"> Contact Me </a></li>
                <li><a href={require("../static/PatrickSutcliffeResume.pdf")} class="indigo-text text-darken-3"> Resume </a></li>
              </ul>
        </div>
    )
}

export default Navbar