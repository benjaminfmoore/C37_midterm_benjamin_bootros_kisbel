import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import SearchForm from './components/SearchForm';
import { Container } from 'react-bootstrap';
import Footer from './components/footer';
import NavBar from './components/NavBar';
import './App.css';
import './index.css';
import CassetteBackground from './pictures/cassette.png';
import CDBackground from './pictures/cd-png-10.png';
import RecordBackground from './pictures/record.png';
import GreyBackground from './pictures/grey.png';

import AboutUs from './components/AboutUs';

const App = () => {
  const [backgroundImg, setBackgroundImg] = useState(GreyBackground);

  const handleBackgroundChange = (newBackground) => {
    if (newBackground === 'cassette') setBackgroundImg(CassetteBackground);
    else if (newBackground === 'cd') setBackgroundImg(CDBackground);
    else if (newBackground === 'record') setBackgroundImg(RecordBackground);
    else if (newBackground === 'grey') setBackgroundImg(GreyBackground);
  };

  return (
    <Router>
      <div
        className="app-container"
        style={{ backgroundImage: `url(${backgroundImg})` }}
      >
        <NavBar />
        <Switch>
          <Route exact path="/">
            <Container>
              <h1>LYRICALLY</h1>
              <SearchForm />
            </Container>
          </Route>
          <Route exact path="/about" component={AboutUs} />
        </Switch>
        <Footer handleBackgroundChange={handleBackgroundChange} />
      </div>
    </Router>
  );
};

export default App;
