import React, { useState } from 'react';
import SearchForm from './components/SearchForm';
import { Container } from 'react-bootstrap';
import Footer from './components/footer';
import NavBar from './components/NavBar';
import './App.css';
import './index.css';
import CassetteBackground from './pictures/cassette.png';
import CDBackground from './pictures/cd-png-10.png';
import RecordBackground from './pictures/record.png';
import GreyBackground from './pictures/grey.png'


const App = () => {
  const [backgroundImg, setBackgroundImg] = useState('');

  const handleBackgroundChange = newBackground => {
    if (newBackground === 'cassette') setBackgroundImg(CassetteBackground)
    else if (newBackground === 'cd') setBackgroundImg(CDBackground)
    else if (newBackground === 'record') setBackgroundImg(RecordBackground)
    else if (newBackground === 'grey') setBackgroundImg(GreyBackground)
  }

  
  return (
    <div className="app-container" style={{ backgroundImage: `url(${backgroundImg})` }}>
      <NavBar />
      <h1>LYRICALLY</h1>
      <Container>
        <SearchForm />
      </Container>
      <Footer handleBackgroundChange={handleBackgroundChange} />
    </div>
  );
};

export default App;
