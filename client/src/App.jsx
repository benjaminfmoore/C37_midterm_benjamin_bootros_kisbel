import React from 'react';
import SearchForm from './components/SearchForm';
import { Container } from 'react-bootstrap';
import Footer from './components/footer';
import './App.css';

const App = () => {
  return (
    <>
    <h1>LYRICALLY</h1>
    <Container>
      <SearchForm />
    </Container>
    <Footer />
    </>
  );
};


export default App;
