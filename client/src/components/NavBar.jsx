import React from 'react';
import '../index.css';
import logo from '../pictures/logo.png';

const NavBar = () => (
  <>
    <nav className="navbar">
      <ul className="nav-ul">
        <li className="navbar-items">Home</li>
        <li className="navbar-items">
          <img
            src={logo}
            alt="logo"
            height="40px"
            width="40px"
            className="navbar-logo"
          />
        </li>
        <li className="navbar-items">About us</li>
      </ul>
    </nav>
    ;
  </>
);
export default NavBar;
