import React from "react";

import foo from '../pictures/cd-png-10.png'

function Footer() {
    return (
        <footer class="site-footer">
            <a href="" id="recordButton">
                <img src={foo} width="40" height="40"/>
            </a>

            <a href="" id="cassetteButton"> 
                <img src="../C37_midterm_benjamin_bootros_kisbel/client/src/pictures/audio_cassette_PNG92152.png" width="40" height="40"/>
            </a>

            <a href="" id="cdButton">
                <img src="../C37_midterm_benjamin_bootros_kisbel/client/src/pictures/cd-png-10.png" width="40" height="40"/>
            </a>
      </footer>
    );
}

export default Footer;