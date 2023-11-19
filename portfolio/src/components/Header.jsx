import  React from 'react';
import "../css/header.css";
import logoimage from '../assets/logoL.png';


// Now you can use useNavigate in your component


const Header = ()=> {
  return (
        <>
            <div className="header">
                <div className="logo">
                    <a href="/">
                        <img src={logoimage} alt='my pic'/>
                    </a>
                    <span className="brandname">2L Dev</span>
                    <label for="menu">
                        <i class="fa fa-bars"></i>
                    </label>
                </div>
                <input type='checkbox' id='menu' class="chkbox"/>
                <ul>
                    <li>
                        <a href="/dashboard">Dashboard</a>
                    </li>
                    <li>
                        <a href="/service">Service</a>
                    </li>

                    <li>
                        <a href="/resume">Resume</a>
                    </li>

                    {/* <li>
                        <a href="/Contact">Contact</a>
                    </li> */}
                </ul>
            </div>
        </>
  );
}

export default Header;