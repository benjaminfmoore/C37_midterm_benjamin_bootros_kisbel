import React from 'react';
import cd from '../pictures/cd-png-10.png';
import record from '../pictures/record.png';
import cassette from '../pictures/cassette.png';
import grey from '../pictures/grey.png'
import '../index.css';


function Footer(props) {


  return (
    <>

    <footer className="site-footer">

      <div id="createdBy">
        <p>Created by Kisbel and Benjamin at Wyncode</p>
      </div>

      <button id="recordButton" onClick={() => props.handleBackgroundChange('record')}>
        <img src={record} width="40" height="40" />
      </button>

      <button id="cassetteButton" onClick={() => props.handleBackgroundChange('cassette')}>
        <img src={cassette} width="40" height="40" />
      </button>

      <button id="cdButton" onClick={() => props.handleBackgroundChange('cd')}>
        <img src={cd} width="40" height="40" />
      </button>

      <button id="greyButton" onClick={() => props.handleBackgroundChange('grey')}>
        <img src={grey} width="40" height="40" />
      </button>
    </footer>
    </>
  );
 
}

export default Footer;
