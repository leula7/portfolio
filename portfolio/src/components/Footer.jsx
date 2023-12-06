import React from "react";
import '../css/footer.css';
import Contact from './Contact.jsx'
import {  BrowserRouter as Router } from 'react-router-dom';
const Footer = ()=>{
    const currentDatae = new Date();
    const year = currentDatae.getFullYear();
    return(
        <>
            <div className="footer">
            <Router>
                <Contact />
            </Router>
                <span>&copy; Powerd by 2L Dev {year}</span>
            </div>
        </>
    )
}

export default Footer;