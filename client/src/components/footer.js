<<<<<<< HEAD
import React from "react";

import foo from '../pictures/cd-png-10.png'

function Footer() {
    return (
        <footer class="site-footer">
            <a href="" id="recordButton">
                <img src={foo} width="40" height="40"/>
            </a>
=======
import React from 'react';
import cd from '../pictures/cd-png-10.png';
import record from '../pictures/record PNG.png';
import cassette from '../pictures/cassette.png';

function Footer() {
  return (
    <footer class="site-footer">
      <div id="createdBy">
        <p>Created by Kisbel and Benjamin at Wyncode!</p>
      </div>
      <a href="" id="recordButton">
        <img src={record} width="40" height="40" />
      </a>
>>>>>>> origin/master

      <a href="" id="cassetteButton">
        <img src={cassette} width="40" height="40" />
      </a>

      <a href="" id="cdButton">
        <img src={cd} width="40" height="40" />
      </a>
    </footer>
  );
}

export default Footer;
