import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import SearchForm from './components/SearchForm';
import { Container } from 'react-bootstrap';
import Footer from './components/footer';
import NavBar from './components/NavBar';
import './App.css';
import './index.css';
import AboutUs from './components/AboutUs';

const App = () => {
  return (
    <Router>
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
      <Footer />
    </Router>
  );
};

export default App;
