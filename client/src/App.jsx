import React from 'react';
import SearchForm from './components/SearchForm';
import { Container } from 'react-bootstrap';
import Footer from './components/footer';
import NavBar from './components/NavBar';
import './App.css';
import './index.css';

const App = () => {
  return (
    <>
      <NavBar />
      <h1>LYRICALLY</h1>
      <Container>
        <SearchForm />
      </Container>
      <Footer />
    </>
  );
};

export default App;
