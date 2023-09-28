import React from "react";
import '../css/footer.css'
const Footer = ()=>{
    const currentDatae = new Date();
    const year = currentDatae.getFullYear();
    return(
        <>
            <div className="footer">
                <span>&copy; Powerd By Leula {year}</span>
            </div>
        </>
    )
}

export default Footer;