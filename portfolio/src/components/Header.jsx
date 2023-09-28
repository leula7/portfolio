import  React from 'react';
import "../css/header.css";
import logoimage from '../assets/logo.png';


// Now you can use useNavigate in your component


const Header = ()=> {
  return (
        <>
            <div className="header">
                <div className="logo">
                    <img src={logoimage} alt='my pic'/>
                    {/* <span>Lemelem</span> */}
                </div>
                <ul>
                    <li>
                        <a href="/dashboard">Dashboard</a>
                    </li>
                    <li>
                        <a href="/resume">Resume</a>
                    </li>

                    <li>
                        <a href="/Contact">Contact</a>
                    </li>
                </ul>
            </div>
        </>
  );
}

export default Header;