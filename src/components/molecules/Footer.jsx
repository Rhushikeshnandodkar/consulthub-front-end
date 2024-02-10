import React from 'react'
import { FooterStyle } from './molecule.style'
import consultlogo from '../../images/logothree.png'
import { Link } from 'react-router-dom'
function Footer() {
  return (
    <div>
      <FooterStyle>
        <div className="footer-section">
            <div className="footer">
                <div className="line">
                    <div className="logo-section"><img src={consultlogo} alt="" /></div>
                    <p>All consultants on our platform are varified and are capable of solving your problem's</p>
                </div>
                <div className="line">
                <h3>Company</h3>
                    <ul>
                    <li><Link to={`/`}>Home</Link></li>
              <li><Link to={`/consultents`}>Find Consultant</Link></li>
                    {/* <li>Become Consultent</li> */}
                    <li><Link to={`/about`}>About</Link></li>
                    <li><Link to={`/contact`}>Contact Us</Link></li>
                    <li><Link to={`/community`}>Community</Link></li>
                    <li><Link to={`/community`}>Privacy Policy</Link></li>
                    </ul>
                </div>
                <div className="line">
                    <h3>Contact information</h3>
                    <ul>
                        <li><b>Phone : </b>+91 9420793421</li>
                        <li><b>Email : </b>consult@consulthub.in</li>
                        <li><b>Address : </b>Audumbar Srushthi Bhintade Nagar Pune-411046</li>
                        {/* <li>Become Consultent</li> */}
                    </ul>
                </div>
                <div className="line">
                    <h3>Social Media</h3>
                    <ul className='social-links'>
                        <li><svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24"><path fill="currentColor" d="m10 15l5.19-3L10 9zm11.56-7.83c.13.47.22 1.1.28 1.9c.07.8.1 1.49.1 2.09L22 12c0 2.19-.16 3.8-.44 4.83c-.25.9-.83 1.48-1.73 1.73c-.47.13-1.33.22-2.65.28c-1.3.07-2.49.1-3.59.1L12 19c-4.19 0-6.8-.16-7.83-.44c-.9-.25-1.48-.83-1.73-1.73c-.13-.47-.22-1.1-.28-1.9c-.07-.8-.1-1.49-.1-2.09L2 12c0-2.19.16-3.8.44-4.83c.25-.9.83-1.48 1.73-1.73c.47-.13 1.33-.22 2.65-.28c1.3-.07 2.49-.1 3.59-.1L12 5c4.19 0 6.8.16 7.83.44c.9.25 1.48.83 1.73 1.73"/></svg></li>
                        <Link to="https://www.instagram.com/consulthub_?igsh=dWJ4cDU2cGowYzk5"><li>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M13.028 2c1.125.003 1.696.009 2.189.023l.194.007c.224.008.445.018.712.03c1.064.05 1.79.218 2.427.465c.66.254 1.216.598 1.772 1.153a4.908 4.908 0 0 1 1.153 1.772c.247.637.415 1.363.465 2.428c.012.266.022.487.03.712l.006.194c.015.492.021 1.063.023 2.188l.001.746v1.31a78.831 78.831 0 0 1-.023 2.188l-.006.194c-.008.225-.018.446-.03.712c-.05 1.065-.22 1.79-.466 2.428a4.883 4.883 0 0 1-1.153 1.772a4.915 4.915 0 0 1-1.772 1.153c-.637.247-1.363.415-2.427.465a72.11 72.11 0 0 1-.712.03l-.194.006c-.493.014-1.064.021-2.189.023l-.746.001h-1.309a78.43 78.43 0 0 1-2.189-.023l-.194-.006a63.036 63.036 0 0 1-.712-.031c-1.064-.05-1.79-.218-2.428-.465a4.889 4.889 0 0 1-1.771-1.153a4.904 4.904 0 0 1-1.154-1.772c-.247-.637-.415-1.363-.465-2.428a74.1 74.1 0 0 1-.03-.712l-.005-.194A79.047 79.047 0 0 1 2 13.028v-2.056a78.82 78.82 0 0 1 .022-2.188l.007-.194c.008-.225.018-.446.03-.712c.05-1.065.218-1.79.465-2.428A4.88 4.88 0 0 1 3.68 3.678a4.897 4.897 0 0 1 1.77-1.153c.638-.247 1.363-.415 2.428-.465c.266-.012.488-.022.712-.03l.194-.006a79 79 0 0 1 2.188-.023zM12 7a5 5 0 1 0 0 10a5 5 0 0 0 0-10m0 2a3 3 0 1 1 .001 6a3 3 0 0 1 0-6m5.25-3.5a1.25 1.25 0 0 0 0 2.5a1.25 1.25 0 0 0 0-2.5"/></svg> 
                        </li></Link>
                       <Link to="https://www.linkedin.com/company/consultthub/?viewAsMember=true"> <li><svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24"><path fill="currentColor" d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93zM6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37z"/></svg></li></Link>
                        <li><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95"/></svg></li>
                    </ul>
                </div>
            </div>
            <div className='copy'><h5>all @copyrights reserved by ConsultHub</h5></div>
        </div>
      </FooterStyle>
    </div>
  )
}

export default Footer
