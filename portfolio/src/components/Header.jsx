// Import necessary modules
import React from 'react';
import "../css/header.css";
import "../css/body.css";
import logoimage from '../assets/logoL.png';
import { Link } from "react-router-dom";

// Now you can use useNavigate in your component
const Header = () => {
  return (
    <>
      <div className="header">
        <div className="logo">
          <Link to="/"> {/* Change href to to */}
            <img src={logoimage} alt='my pic' />
          </Link>
          <span className="brandname">2L Dev</span>
          <label htmlFor="menu">
            <i className="fa fa-bars"></i>
          </label>
        </div>
        <input type='checkbox' id='menu' className="chkbox" />
        <ul>
          <li>
            <Link to="/dashboard">Dashboard</Link> {/* Change href to to */}
          </li>
          <li>
            <Link to="/service">Service</Link> {/* Change href to to */}
          </li>
          <li>
            <Link to="/resume">Resume</Link> {/* Change href to to */}
          </li>
        </ul>
      </div>
    </>
  );
}

export default Header;
