import React from "react";

function HomePage() {
  return (
    <div>
      <section className="intro-section bg-dark py-4" data-target="#navbarResponsive">
        <div className="container text-center">
          <h2 className="intro-heading mb-4 pt-5 pt-md-0">Hi, I am Faduma</h2>

          <p className="intro-text mb-5">I'm a junior software developer who is passionate about coding and loves to learn new technologies.</p>

          <div className="d-flex justify-content-center flex-wrap">
            <a href="https://www.linkedin.com/in/faduma-ibrahim-msc-230a5387/" target="_blank" rel="noopener noreferrer" className="btn btn-outline-light me-3 mb-3"><i className="fab fa-linkedin me-2"></i> LinkedIn</a>
            <a href="https://github.com/fadumasaidcodes" target="_blank" rel="noopener noreferrer" className="btn btn-outline-light mx-3 mb-3"><i className="fab fa-github me-2"></i> GitHub</a>
            <a href="https://example.com/Faduma_Resume.pdf" target="_blank" rel="noopener noreferrer" className="btn btn-outline-light me-3 mb-3"><i className="fas fa-file-pdf me-2"></i> Resume</a>
          </div>

          <a href="#About" className="btn btn-primary-intro mt-3">Learn More</a>
        </div>
      </section>
    </div>
  );
}

export default HomePage;
