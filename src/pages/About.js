import React from 'react'
import Navbar from '../component/navbar'
import displayImg from "../component/images/faduma.png"

const About = () => {
  return (
    <div>
     < Navbar/>
     <header className="masthead">
    <div className="container align-me" id="About">
      <div className="row align-items-center">
        <div className="col-lg-3 my-auto mb-5">
          <div className="device-container">
          <img
              src={displayImg}
              className="rounded-circle"
              width="250rem"
              alt="displayPicture"
            />
          </div>
        </div>
        <div className="col-lg-6 my-auto text-center mt-5 mb-5">
          <h1 className="sub-heading mb-4">About Me</h1>
          <p className="about-me-txt">
            I'm a MSc graduate, and I have a passion for building websites and bringing ideas to life through modern and responsive web design using various technologies. I'm a hardworking individual who is honest, sincere, trustworthy, and responsible for the assigned task. You're welcome to check out my work or follow me on my social media accounts.</p>
          <a href="#Contact" class="btn btn-primary">Contact Me</a>
        </div>
      </div>
    </div>
  </header>
    </div>
  )
}

export default About

