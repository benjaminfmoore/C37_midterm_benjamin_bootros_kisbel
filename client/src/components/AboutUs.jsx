import React from 'react';
import '../index.css';
import Benprofile from './picture/Ben-profile';

function AboutUs() {
  return (
    <>
      <h2>ABOUT US</h2>

      <div id="about-lyrically">
        <p>about lyrically in here. 2020. wyncoders. sure</p>
      </div>

      <div class="break"></div>

      <div id="about-wyncoders">
        <div id="about-kis">
          <img
            src="https://image.shutterstock.com/image-vector/big-man-giving-help-small-260nw-68965435.jpg"
            alt="picture of kis"
          />
          <div class="break"></div>
          <p>
            kis says herro.kis says herro.kis says herro kis says herro.kis says
            herro.kis says herro kis says herro.kis says herro.kis says herro.
          </p>
        </div>

        <div id="about-ben">
          <img src={Benprofile} alt="picture of ben" />
          <div class="break"></div>
          <p>
            Ben is a student at Wyncode, veteran and overall geek. He wanted to
            create this site because even though he loves his fiance...She's
            usually singing their favorite songs wrong. Love you honey!
          </p>
        </div>
      </div>
    </>
  );
}

export default AboutUs;
