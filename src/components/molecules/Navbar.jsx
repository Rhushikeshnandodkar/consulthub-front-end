import React from 'react'
import { NavbarStyle } from './molecule.style'
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import consultlogo from '../../images/logothree.png'
import { getUserInfo } from '../../features/userAuth/userSlice';
function Navbar() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [isMenuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };
  const {user, userToken} = useSelector((state) =>({
    ...state.user
  }))
  const logOut = () =>{
    localStorage.removeItem('userToken')
    localStorage.removeItem('refreshToken')
    localStorage.removeItem('user')
    dispatch(getUserInfo())
    window.location.reload()
  }
  return (
    <div>
      <NavbarStyle>
        <>
        <div className="navbar-section">
            <div className="navbar">
                <div className="logo-section">
             <Link to={'/'}>   <img src={consultlogo} alt="" /></Link>
                </div>
                <div className="menu-section">
                  <ul>
                  <li><Link to={`/`}>Home</Link></li>
                    <li><Link to={`/consultents`}>Find Consultant</Link></li>
                    {/* <li>Become Consultent</li> */}
                    <li><Link to={`/about`}>About</Link></li>
                    <li><Link to={`/contact`}>Contact Us</Link></li>
                    <li><Link to={`/community`}>Community</Link></li>
                  </ul>
                </div>
                <div className="button-section">
                 {user && userToken ? 
                 <>
                  <Link to={'/user-login'}>
                <button className="btn" onClick={logOut}>Logout</button></Link>
                 <Link to={'/your-profile'}>
                <button className="btn">Profile</button></Link>

                 </>
                 :  <Link to={'/user-login'}><button className="btn">Login/Signup</button></Link>}
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
                  <Link to={'/'}>   <img src={consultlogo} alt="" /></Link>
                </div>
              <ul>
              <li><Link to={`/`}>Home</Link></li>
              <li><Link to={`/consultents`}>Find Consultant</Link></li>
                    {/* <li>Become Consultent</li> */}
                    <li><Link to={`/about`}>About</Link></li>
                    <li><Link to={`/contact`}>Contact Us</Link></li>
                    <li><Link to={`/community`}>Community</Link></li>
                    <div className="button-section">
                 {user && userToken ? 
                 <>
                  <Link to={'/user-login'}>
                <button className="btn" onClick={logOut}>Logout</button></Link>
                 <Link to={'/your-profile'}>
                <button className="btn">Profile</button></Link>

                 </>
                 :  <button className="btn"><Link to={'/user-login'}>Login/Signup</Link></button>}
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
