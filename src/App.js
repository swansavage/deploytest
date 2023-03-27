import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import ProjectGallery from './pages/projectGallery'
import Navbar from './component/navbar';
import About from './pages/About';
import Home from './pages/Home'

export default function App() {
  return (
    <BrowserRouter>
    <Navbar/>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/projectGallery" element={<ProjectGallery/>} />
          <Route path="/React-Portfolio" elemnt={<Navigate replace to="/"/>} />
      </Routes>
    </BrowserRouter>
  );
}