import React from 'react'
import { NavbarStyle } from './molecule.style'
import { Link } from 'react-router-dom'
function Navbar() {
  return (
    <div>
      <NavbarStyle>
        <>
        <div className="navbar-section">
            <div className="navbar">
                <div className="logo-section">
                <h3>Consult<b>Hub</b></h3>
                </div>
                <div className="menu-section">
                  <ul>
                    <li><Link to={`/`}>Find Consultent</Link></li>
                    <li>Become Consultent</li>
                    <li>About</li>
                    <li>Connect Us</li>
                    <li>Resources</li>
                  </ul>
                </div>
                <div className="button-section">
                  <button className="btn">Login/Signup</button>
                </div>
            </div>
        </div>
        </>
      </NavbarStyle>
    </div>
  )
}
export default Navbar
