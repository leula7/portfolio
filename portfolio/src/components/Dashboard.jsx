import React  from "react";
import '../css/dashboard.css';
import logoimage from '../assets/logo.png';
import Tilt from 'react-parallax-tilt'; // Adjust the actual import path as per your project setup
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Contact from "./Contact";


const Content = ()=>{
    
    return(
        <div className="content">
           <div class="intro">
                    {/* <img className="my_image" src={logoimage} alt="it suppose to be my picture"/>                */}

                    <Tilt className="Tilt" options={{ max : 55}} style={{ height: 0, width: 400 }} >
                        <img className="my_image" src={logoimage} alt="it suppose to be my picture"/>               
                    </Tilt>
                   <div className="text-box">
                        <h1>Hello, I'm Leul Kahssaye</h1>
                        <p>
                            As a dedicated web designer, I have a strong respect for creating stunning and useful websites that offer outstanding user experiences.
                            I take pride in my ability to bring imaginative notions to life and enjoy the challenges of making ideas a reality.
                            I've been dedicated to innovation and lifelong learning throughout my web development career. I've developed my abilities
                            to construct dynamic, responsive websites that fascinate and engage users thanks to a solid foundation in HTML, CSS, and JavaScript.
                            My passion for clean code and attention to detail push me to deliver projects that not only look stunning but
                            also function properly. I'm a collaborative person by nature, and I like working with teams from all disciplines
                            to turn ideas into completely functional site
                            I am able to deliver cutting-edge solutions that meet and surpass client expectations
                            because to my commitment to remaining current with the newest web technologies and best
                            practises. I'm eager to advance in web development and provide my originality
                            and functionality to the virtual world.
                        </p>
                   </div>
                </div>
            {/* <Contact /> */}
        </div>
    )
}

export default Content;