import React from "react";
import '../css/resume.css';
import '../css/dashboard.css';

const Resume = ()=>{

    return(
        <div className="content">
            <div className="download">
            <a
                href='resume.pdf'
                download = "resume.pdf"
                target="_blank"
                rel="noreferrer">
                <button><span><i className="fa fa-download"></i>Download .pdf file</span></button>
            </a>
            <a
                href="resume.docx"
                download="resume.docx"
                target="_blank"
                rel="noreferrer">
                <button><span><i className="fa fa-download"></i>Download .docx file</span></button>
            </a>
            </div>
            <div className="resume">
                <p>
                    Experienced in developing a dynamic web app for Hibert
                    Bank's Procurement Management System. Utilized latest
                    web technologies, MySQL, Express, React, and Node.js.
                    Designed a sophisticated application with a robust MVC 
                    architecture using SQLite library.
                    In 2023, I earned my BSc in Computer Science from St. Mary University,
                    achieving an impressive CGPA of 3.51. I have taken as an Internship at
                    Nib international bank Desktop Application using C#, Making and 
                    Maintaining Network Cables, Configuring PuTTY Software for remote
                    Access, Configuring GitLab using Linux Server I also take a Computer 
                    Maintenance course at my Campus.
                </p>
            </div>
        </div>
    );
}

export default Resume;