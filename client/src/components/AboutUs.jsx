import React from 'react';
import '../index.css';
import Ben from '../pictures/Ben.jpeg';
import Kis from '../pictures/Kis.jpg';

function AboutUs() {
  return (
    <>
      <div class="aboutUsContainer">
        <h2>ABOUT US</h2>
        <div id="about-lyrically">
          <p>
            Lyrically was created by Kisbel and Benjamin. Two members of C-37 at
            Wyncode
          </p>
        </div>

        <div class="break"></div>

        <div id="about-wyncoders">
          <div id="about-kis">
            <img src={Kis} alt="picture of kis" height="200px" width="170px" />

            <p>
              Kis is a student at wyncode. she likes to listen to music from
              other countries, so she definitely needs to have lyrics at hand
              since she doesn't really understand!
            </p>
          </div>

          <div id="about-ben">
            <img src={Ben} alt="picture of ben" height="200px" width="170px" />

            <p>
              Ben is a student at Wyncode, veteran and overall geek. He wanted
              to create this site because even though he loves his
              fiance...She's usually singing their favorite songs wrong. Love
              you honey!
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutUs;
