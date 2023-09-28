import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import Resume from './components/Resume'; 
import Content from './components/Content';
import './css/body.css';
import Contact from './components/Contact';
//import 'tachyons/css/tachyons.min.css'; // Import the CSS file


const App = () => {
  return (
    <>
      <Header />
        <Router>
            <Routes>
              <Route path='/' element={<Content />}/>
              <Route path='/dashboard' element={<Content />}/>
              <Route path='/resume' element={<Resume />}/>
              <Route path='/contact' element={<Contact />}/>
            </Routes>
        </Router>
      <Footer />
    </>
  );
};

export default App;
