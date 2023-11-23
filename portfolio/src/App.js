import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import Resume from './components/Resume'; 
import Dashboard from './components/Dashboard';
import './css/body.css';
import './css/responsive.css'
import Contact from './components/Contact';
import Service from './components/Service';
import PageNotFound from './components/404Page';
//import 'tachyons/css/tachyons.min.css'; // Import the CSS file


const App = () => {
  return (
    <>
      <Header />
        <Router>
            <Routes>
              <Route path='/' element={<Dashboard />}/>
              <Route path='/dashboard' element={<Dashboard />}/>
              <Route path='/service' element={<Service />}/>
              <Route path='/resume' element={<Resume />}/>
              <Route path='/contact' element={<Contact />}/>
              <Route path='*' element={<PageNotFound />} />
            </Routes>
        </Router>
      <Footer />
    </>
  );
};

export default App;
