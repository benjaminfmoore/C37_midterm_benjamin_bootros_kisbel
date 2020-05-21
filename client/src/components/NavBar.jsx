import React from 'react';
import { NavLink } from 'react-router-dom';
import '../index.css';
import logo from '../pictures/logo.png';

const NavBar = () => (
  <>
    <nav className="navbar">
      <ul className="nav-ul">
        <li className="navbar-items">
          <NavLink to="/" exact>
            Home
          </NavLink>
        </li>
        <li className="navbar-items">
          <img
            src={logo}
            alt="logo"
            height="40px"
            width="40px"
            className="navbar-logo"
          />
        </li>
        <li className="navbar-items">
          <NavLink to="/about" exact>
            About Us
          </NavLink>
        </li>
      </ul>
    </nav>
    ;
  </>
);
export default NavBar;
