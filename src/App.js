import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProjectGallery from './pages/ProjectGallery'
import Navbar from './component/Navbar';
import About from './pages/About';
import Home from './pages/Home'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Navbar />}>
      <Route index element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/ProjectGallery" element={<ProjectGallery/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

