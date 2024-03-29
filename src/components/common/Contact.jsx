import React from 'react'
import Navbar from '../molecules/Navbar'
import { ContactStyle } from './common.style'
import Footer from '../molecules/Footer'
function Contact() {
  return (
    <div>
      <Navbar/>
      <ContactStyle>
      <div className="contact">
      <div className="contact-head">
          <h1>Get in touch</h1>
          <p>Want to get in touch? we'd love to hear from you here's how you can reach us...</p>
        </div>
        <div className="contact-section">
          <div className="contact-box">
          <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M20 4H4v13.17L5.17 16H20zm-2 10H6v-2h12zm0-3H6V9h12zm0-3H6V6h12z" opacity=".3"/><path fill="currentColor" d="M20 18c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4zm-16-.83V4h16v12H5.17zM6 12h12v2H6zm0-3h12v2H6zm0-3h12v2H6z"/></svg>
          <p>ConsultHub offers users a comprehensive solution for accessing expert advice, personalized consultations, and practical solutions to their specific problems. By leveraging the benefits of our platform, users can navigate challenges with confidence, make informed decisions, and achieve their goals effectively</p>
          </div>
          <div className="contact-box">
          <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="m20 8l-8 5l-8-5v10h16zm0-2H4l8 4.99z" opacity=".3"/><path fill="currentColor" d="M4 20h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2M20 6l-8 4.99L4 6zM4 8l8 5l8-5v10H4z"/></svg>
          <p> Consult@consulthub.in <br /> +91 9420793421 <br /> Audumbar shrushti bhintade nagar ambegao pin-411046</p>
          </div>
        </div>
      </div>
      </ContactStyle>
      <Footer/>
    </div>
  )
}

export default Contact
