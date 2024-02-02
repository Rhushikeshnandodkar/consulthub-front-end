import React from 'react'
import Navbar from '../molecules/Navbar'
import { AboutStyle } from './common.style' 
import Footer from '../molecules/Footer'
function About() {
  return (
    <div>
      <Navbar/>
      <AboutStyle>
      <div className="about-section">
        <div className="about-platform">
          <h2>About Plotfrom</h2>
          <p>It is the journey that takes you to new destinations every day with endless possibilities of life on the back of happiness, energy, and hope. Practo wants to make this journey easy for every Indian and help them live healthier and longer lives. Practo is on a mission to make quality healthcare affordable and accessible for over a billion+ Indians. We believe in empowering our users with the most accurate, comprehensive, and curated information and care, enabling them to make better healthcare decisions.</p>
        </div>
      </div>
      <div className="about-section">
        <div className="about-solving">
          <h2>What problem we are solving</h2>
          <div className="problem">
            <h3>People have no direction in their life or they don’t have mentor to guide them.</h3>
            <p>Not months. Not weeks. Days. Consistent, small steps give massive results towards fulfilling our mission. Set up and sell your digital products within minutes. With our seamless payment integrations, accept payments from your audience anywhere in the world with ease.</p>
          </div>
          <div className="problem">
            <h3>Its Hard to find consultent on social media platroms</h3>
            <p>Not months. Not weeks. Days. Consistent, small steps give massive results towards fulfilling our mission. Set up and sell your digital products within minutes. With our seamless payment integrations, accept payments from your audience anywhere in the world with ease.</p>
          </div>
        </div>
      </div>
      </AboutStyle>
      <Footer/>
    </div>
  )
}

export default About
