import React from "react";

import '../css/contact.css'
import { Link } from "react-router-dom";
const  Contact = () =>{
    return(
        <>
            <div className="contact">
                   <div className="intoch">
                        <h2>Contact Me</h2>
                            <p>Interested in working together? Feel free to contact me!</p>
                            <p>Get in Touch</p>
                   </div>

                        <div className="social-media">
                            <Link to="https://www.facebook.com/leul.kahssaye.3" rel="noopener noreferrer" target="_blank"  className="fa fa-facebook"></Link>
                            <Link to="https://t.me/lelekassu" className="fa fa-brands fa-telegram" target="_blank" rel="noopener noreferrer"></Link>
                            <Link to="https://www.linkedin.com/in/l-k-7546a1284/" className="fa fa-brands fa-linkedin" target="_blank" rel="noopener noreferrer"></Link> 
                            <Link to="https://github.com/leula7" className="fa fa-brands fa-github" target="_blank" rel="noopener noreferrer"></Link>
                            <Link to="mailto:leulkahssaye100@gmail.com" className="fa fa-brands fa-google" target="_blank" rel="noopener noreferrer"></Link>
                        </div>
                   
                </div>
        </>
    )
}

export default Contact;