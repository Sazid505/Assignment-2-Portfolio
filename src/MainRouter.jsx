
/*
  File: MainRouter.jsx
  Student Name: MD Sazid
  Student ID: 301287514
  Date: September 26, 2024
*/
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Services from './pages/Services';
import Contact from './pages/Contact';
import Layout from './components/Layout';

// MainRouter component to handle all the routes in the application
const MainRouter = () => {
  return (
    <>
      <Layout />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
};

export default MainRouter;
