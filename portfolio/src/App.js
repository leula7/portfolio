import React, { lazy, Suspense } from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';

// Lazy-loaded components
const Dashboard = lazy(() => import('./components/Dashboard'));
const Service = lazy(() => import('./components/Service'));
const Resume = lazy(() => import('./components/Resume'));
const PageNotFound = lazy(() => import('./components/404Page'));

const App = () => {
  return (
    <>
      
      <Router>
        <Header />
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/service" element={<Service />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </Suspense>
      </Router>
      <Footer />
    </>
  );
};

export default App;
