import React from "react";
import '../css/dashboard.css';
import logoimage from '../assets/logo.png';

const Content = ()=>{
    return(
        <div className="content">
    <section class="dashboard">
        <h1>Hello, I'm Leul Kahssaye</h1>
        <div class="intro">
            <p>
            As a dedicated web designer, I have a strong respect for creating stunning and useful websites that offer outstanding user experiences. I take pride in my ability to bring imaginative notions to life and enjoy the challenges of making ideas a reality.
            I've been dedicated to innovation and lifelong learning throughout my web development career. I've developed my abilities to construct dynamic, responsive websites that fascinate and engage users thanks to a solid foundation in HTML, CSS, and JavaScript.
            My passion for clean code and attention to detail push me to deliver projects that not only look stunning but also function properly. I'm a collaborative person by nature, and I like working with teams from all disciplines to turn ideas into completely functional site
            I am able to deliver cutting-edge solutions that meet and surpass client expectations because to my commitment to remaining current with the newest web technologies and best practises. I'm eager to advance in web development and provide my originality and functionality to the virtual world.
            </p>
           <img className="my_image" src={logoimage} alt="it suppose to be my picture"/>
        </div>
        
        <div class="skills">
            <h2>Fornt-End Skills</h2>
            <ul>
                <li>
                    <h3>JavaScript</h3>
                    <p>
                    Proficient in JavaScript, a versatile programming language that powers the interactivity and dynamic behavior of modern websites. I leverage JS to create responsive and user-friendly web applications, implementing features such as form validation, animations, and real-time updates.
                    </p>
                </li>
                <li>
                    <h3>React.js</h3>
                    <p>
                    Skilled in React, a powerful JavaScript library for building user interfaces. I use React to create modular, reusable UI components and develop single-page applications (SPAs) with a focus on speed and performance. React allows me to efficiently manage state, handle data flow, and create engaging web experiences.
                    </p>
                </li>
                <li>
                    <h3>HTML5 & CSS3</h3>
                    <p>
                    Proficient in both HTML (Hypertext Markup Language) and CSS (Cascading Style Sheets), the fundamental building blocks of web development. I have expertise in creating well-structured HTML markup and styling web layouts with CSS to deliver visually appealing and responsive websites. My skills include semantic HTML5, CSS3 animations, and responsive design techniques, ensuring a seamless and engaging user experience across various devices and screen sizes.
                    </p>
                </li>
            </ul>
            <h2>Back-End Skills</h2>
            <ul>
                <li>
                    <h3>Rest API</h3>
                    <p>
                        Skilled in designing and building RESTful APIs that allow communication between different parts of web applications. I ensure secure and efficient data exchange, enabling seamless integration of frontend and backend systems.
                    </p>
                </li>
                <li>
                    <h3>Android Application</h3>
                    <p>
                    Experienced in developing mobile applications for the Android platform using Java and Kotlin. I focus on creating intuitive, performance-driven apps with a keen eye on user experience and design.
                    </p>
                </li>
                <li>
                    <h3>Express JS</h3>
                    <p>
                        Proficient in using Express.js, a popular Node.js framework, to develop robust backend applications. I can create RESTful APIs, handle routing, and manage middleware for web services.
                    </p>
                </li>
                <li>
                    <h3>My-SQL</h3>
                    <p>
                        Proficient in working with MySQL, 
                        a popular relational database management 
                        system. I can design and optimize databases, write complex SQL queries, and ensure efficient data storage and retrieval.
                    </p>
                </li>
                <li>
                    <h3>SQL</h3>
                    <p>
                    I have expertise in working with various SQL databases, including MySQL, and SQLite. I can design, manage, and optimize relational databases for web applications.
                    </p>
                </li>
            </ul>
        </div>
        
        {/* <div class="portfolio-highlights">
            <h2>Portfolio Highlights</h2>
            <div class="project">
                <img src="project1.jpg" alt="Project 1"/>
                <h3>Project 1</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <a href="project1-details.html">View Project</a>
            </div>
            
            <div class="project">
                <img src="project2.jpg" alt="Project 2"/>
                <h3>Project 2</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <a href="project2-details.html">View Project</a>
            </div>
        </div> */}
        
        <div class="contact">
            <h2>Contact Me</h2>
            <p>Interested in working together? Feel free to contact me!</p>
            <a href="/contact">Get in Touch</a>
        </div>
    </section>
        </div>
    )
}

export default Content;