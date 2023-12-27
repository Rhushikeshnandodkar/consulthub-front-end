import React from 'react'
import { ThanksStyle } from './molecule.style'
import Navbar from './Navbar'
import { Link } from 'react-router-dom'
function BookingThanks() {
  return (
    <div>
      <Navbar/>
      <ThanksStyle>
        <div className="thanks-section">
          <div className="thanks-icon">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15 15"><path fill="#6000f9" fill-rule="evenodd" d="M0 7.5a7.5 7.5 0 1 1 15 0a7.5 7.5 0 0 1-15 0m7.072 3.21l4.318-5.398l-.78-.624l-3.682 4.601L4.32 7.116l-.64.768z" clip-rule="evenodd"/></svg>
          </div>
          <div className="thanks-text">
            <h1>Thanks For Booking</h1>
            <p>Our team will connect you soon and tell you further process</p>
            <button><Link to="/">Back To Home</Link></button>
          </div>
        </div>
      </ThanksStyle>
    </div>
  )
}

export default BookingThanks
