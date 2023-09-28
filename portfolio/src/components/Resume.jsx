import React from "react";

import '../css/resume.css';
const Resume = ()=>{
    
    return(
        <div className="content">
            <div className="download">
                <button className="btnpdf"><span>Download a PDF</span></button>
                <button className="btndocx"><span>Download a .docx</span></button>
            </div>
            <div className="resume">
                lorem*100
            </div>
        </div>
    );
}

export default Resume;