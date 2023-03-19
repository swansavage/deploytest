import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function handleToggleMenu() {
    setIsMenuOpen(!isMenuOpen);
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-light fixed-top" id="mainNav">
      <div className="container">
        <NavbarBrand brandName="Portfolio" />
        <NavbarToggler handleToggleMenu={handleToggleMenu} />
        <CollapsibleMenu isMenuOpen={isMenuOpen} />
      </div>
    </nav>
  );
}

function NavbarBrand({ brandName }) {
  return (
    <a className="navbar-brand js-scroll-trigger" href="#page-top">{brandName}</a>
  );
}

function NavbarToggler({ handleToggleMenu }) {
  return (
    <button className="navbar-toggler navbar-toggler-right" type="button" onClick={handleToggleMenu} aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
  );
}

function CollapsibleMenu({ isMenuOpen }) {
  return (
    <div className={`collapse navbar-collapse${isMenuOpen ? ' show' : ''}`} id="navbarResponsive">
      <ul className="navbar-nav ml-auto">
        <MenuLink linkText="Home" targetSection="#home" />
        <MenuLink linkText="About" targetSection="#about" />
        <MenuLink linkText="Portfolio" targetSection="#portfolio" />
        <MenuLink linkText="Skills" targetSection="#skills" />
        <MenuLink linkText="Contact" targetSection="#contact" />
      </ul>
    </div>
  );
}

function MenuLink({ linkText, targetSection }) {
  return (
    <li className="nav-item">
      <Link className="nav-link js-scroll-trigger" to={targetSection}>{linkText}</Link>
    </li>
  );
}

function Section({ id, children }) {
  return (
    <section id={id}>
      {children}
    </section>
  );
}
