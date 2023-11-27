import React, { lazy } from 'react';
import { Route, BrowserRouter as Router, Routes,Switch } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
// import Resume from './components/Resume'; 
// import Dashboard from './components/Dashboard';
// import Service from './components/Service';
//import {PageNotFound} from './components/404Page';
import './css/body.css';
import './css/responsive.css';
//import 'tachyons/css/tachyons.min.css'; // Import the CSS file

const Dashboard = lazy(()=>import('./components/Dashboard'));
const Service = lazy(()=>import('./components/Service'));
const Resume = lazy(()=>import('./components/Resume'));
const PageNotFound = lazy(async()=>{
  const module = await import('./components/404Page');
  return {default: module.PageNotFound}
});

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
              <Route path='*' element={<PageNotFound />} />
            </Routes>
        </Router>
      <Footer />
    </>
  );
};

export default App;
