import React from "react";
import '../css/footer.css';
import Contact from './Contact.jsx'
const Footer = ()=>{
    const currentDatae = new Date();
    const year = currentDatae.getFullYear();
    return(
        <>
            <div className="footer">
                <span>&copy; Powerd by 2L Dev {year}</span>
                <Contact />
            </div>
        </>
    )
}

export default Footer;