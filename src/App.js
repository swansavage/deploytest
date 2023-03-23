import React from 'react';
import { HashRouter as Router, Routes } from 'react-router-dom';
import Navbar from './component/Navbar';
import About from './pages/About';

export default function App() {
  return (
    <Router>
        <Navbar />
        <About />
        <Routes>
    
        </Routes>
    </Router>
  );
}

