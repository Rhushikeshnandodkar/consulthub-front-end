import React from 'react'
import { NavbarStyle } from './molecule.style'
import { Link } from 'react-router-dom'
import { useState } from 'react';
import { useSelector } from 'react-redux';
function Navbar() {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };
  const {user, userToken} = useSelector((state) =>({
    ...state.user
  }))
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
                 {user && userToken ? <p><svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><circle cx="12" cy="7.5" r="3"/><path d="M19.5 20.5c-.475-9.333-14.525-9.333-15 0"/></g></svg> <h6>{user.username}</h6></p> :  <button className="btn"><Link to={'/user-login'}>Login/Signup</Link></button>}
                </div>
                <div className={`burger ${isMenuOpen ? 'remove' : ''}`}>
                  <button onClick={toggleMenu}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 17h18M3 12h18M3 7h18"/></svg></button>
                </div>
                <div className={`burger-cut ${isMenuOpen ? 'cuticon' : ''}`}>
                  <button onClick={toggleMenu}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M20 20L4 4m16 0L4 20"/></svg></button>
                </div>
            </div>
        </div>
        <div className={`response-bar ${isMenuOpen ? 'open' : ''}`}>
                  <div className="bar-section">
                  <div className="logo-section">
                <h3>Consult<b>Hub</b></h3>
                
                </div>
                    <ul>
                    <li><Link to={`/`}>Find Consultent</Link></li>
                    <li>Become Consultent</li>
                    <li>About</li>
                    <li>Connect Us</li>
                    <li>Resources</li>
                  <div className="button-section">
                  <button className="btn"><Link to={'/user-login'}>Login/Signup</Link></button>
                </div>
                    </ul>
                  </div>
                </div>
        </>
      </NavbarStyle>
    </div>
  )
}
export default Navbar
