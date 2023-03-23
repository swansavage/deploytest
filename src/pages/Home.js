import React from 'react';
import Home from '../pages/Home';

function Layout() {
  return (
    <div>
   
  
        <Home />
        <section class="intro-section bg-dark py-4" data-target="#navbarResponsive">
    <div class="container text-center">
      <h2 class="intro-heading mb-4 pt-5 pt-md-0">Hi, I am Faduma</h2>


      <p class="intro-text mb-5">I'm a junior software developer who is passionate about coding and loves to learn new technologies.</p>
        <div class="d-flex justify-content-center flex-wrap">
            <a href="https://www.linkedin.com/in/faduma-ibrahim-msc-230a5387/" target="_blank" rel="noopener" class="btn btn-outline-light me-3 mb-3"><i class="fab fa-linkedin me-2"></i> LinkedIn</a>
            <a href="https://github.com/fadumasaidcodes" target="_blank" rel="noopener" class="btn btn-outline-light mx-3 mb-3"><i class="fab fa-github me-2"></i> GitHub</a>
            <a href="https://example.com/Faduma_Resume.pdf" target="_blank" rel="noopener" class="btn btn-outline-light me-3 mb-3"><i class="fas fa-file-pdf me-2"></i> Resume</a>
        </div>
        <a href="#About" class="btn btn-primary-intro mt-3">Learn More</a>
    </div>
  </section>


      
    </div>
  );
}

export default Layout;
