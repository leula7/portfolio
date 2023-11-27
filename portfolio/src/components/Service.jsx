import React from 'react';
import '../css/dashboard.css';
const Service = () =>{
    
    const forontEnd = [
        {
            "title": "JavaScript",
            "desc": `Proficient in JavaScript, a versatile programming language that powers
            the interactivity and dynamic behavior of modern websites. I leverage JS 
            to create responsive and user-friendly web applications, implementing 
            features such as form validation, animations, and real-time updates.`
        },
        {
            "title": "React.Js",
            "desc": `Skilled in React, a powerful JavaScript library for building user interfaces.
            I use React to create modular, reusable UI components and develop single-page
             applications (SPAs) with a focus on speed and performance. React allows me to
              efficiently manage state, handle data flow, and create engaging web experiences.`
        },
        {
            "title": "HTML5 and CSS3",
            "desc": `   Proficient in both HTML (Hypertext Markup Language) and CSS (Cascading Style Sheets),
            the fundamental building blocks of web development. I have expertise in creating
             well-structured HTML markup and styling web layouts with CSS to deliver visually
              appealing and responsive websites. My skills include semantic HTML5, CSS3 animations,
               and responsive design techniques, ensuring a seamless and engaging user experience
                across various devices and screen sizes.`
        }

    ]

    const backEnd = [
        {
            "title": "Rest API",
            "desc": `Skilled in designing and building RESTful APIs that allow communication between different parts of web applications.
             I ensure secure and efficient data exchange, enabling seamless integration of frontend and backend systems.`
        },
        {
            "title": "Android Application",
            "desc": `Experienced in developing mobile applications for the Android platform using Java and Kotlin.
                    I focus on creating intuitive, performance-driven apps with a keen eye on user experience and design.`
        },

        {
            "title": "Express Js",
            "desc": ` Proficient in using Express.js, a popular Node.js framework, to develop robust backend applications.
                         I can create RESTful APIs, handle routing, and manage middleware for web services.`
        },
        {
            "title": "My-SQL",
            "desc": `Proficient in working with MySQL,a popular relational database management 
                    system. I can design and optimize databases, write complex SQL queries, 
                    and ensure efficient data storage and retrieval.`
        },
        {
            "title": "SQL",
            "desc": `I have expertise in working with various SQL databases, including MySQL,
                     and SQLite. I can design, manage, and optimize relational databases for
                      web applications.`
        },
    ]

    return(
        <div className="content">
            
            <div className="skills">
                    <div className="front-end">
                        <h2>Fornt-End</h2>
                        <ul>
                            {
                                forontEnd.map((val,index)=>{
                                return(
                                    <li key={index}>
                                        <div className={" col col"+index}>
                                            <h3>{val.title}</h3>
                                            <p>{val.desc}</p>
                                        </div>
                                    </li>
                                )
                                })
                            }
                
                        </ul>
                    </div>
                    
                    <div className="back-end">
                    <h2>Back-End</h2>
                        <ul>
                            {
                                backEnd.map((val,index)=>{
                                    return(
                                    <li key={index}>
                                        <div className={"col col"+index}>
                                            <h3>{val.title}</h3>
                                            <p>{val.desc}</p>
                                        </div>
                                    </li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                </div>
                {/* <Contact /> */}
        </div>
    )
}

export default Service;