import React from 'react'
import { LandingPageStyle } from './common.style'
import Navbar from '../molecules/Navbar'
import Instructor from '../../images/amandhattarwal.jpg'
function LandingPage() {
  return (
    <div>
    <Navbar/>
      <LandingPageStyle>
      <section className="text-section">
            <div className="text">
               <div className="main-text">
                <h1>A Place Where <b>People</b> Connect's With <b>Industry Experts</b> And Get Consultation.</h1>
                <p>Chat with Expert's Who Have All the Answers, Just for You! Whether it's picking the coolest clothe's or learning new skill's, <br/> our platform connect's you with top consultant's to help you with anything and everything you need!</p>
                <div className="btn"><a href="">Our Upcomming Session</a><a className="active" href="">Learn More About Platform</a></div>
               </div>
            </div>
    </section>

    <section class="heading">
        <h2>Our Upcomming Session</h2>
        <p>We are going to host a <b>Free</b> online session with industry expert for you.</p>
    </section>
        
    <section class="session-section">
        <div class="left-side">
            <div class="host-image"><img src={Instructor} alt=""/>
                <div class="social-icons"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path  d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77Z"/></svg>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M13.028 2.001a78.82 78.82 0 0 1 2.189.022l.194.007c.224.008.445.018.712.03c1.064.05 1.79.218 2.427.465c.66.254 1.216.598 1.772 1.154a4.908 4.908 0 0 1 1.153 1.771c.247.637.415 1.364.465 2.428c.012.266.022.488.03.712l.006.194a79 79 0 0 1 .023 2.188l.001.746v1.31a78.836 78.836 0 0 1-.023 2.189l-.006.194c-.008.224-.018.445-.03.712c-.05 1.064-.22 1.79-.466 2.427a4.884 4.884 0 0 1-1.153 1.772a4.915 4.915 0 0 1-1.772 1.153c-.637.247-1.363.415-2.427.465c-.267.012-.488.022-.712.03l-.194.006a79 79 0 0 1-2.189.023l-.746.001h-1.309a78.836 78.836 0 0 1-2.189-.023l-.194-.006a60.64 60.64 0 0 1-.712-.03c-1.064-.05-1.79-.22-2.428-.466a4.89 4.89 0 0 1-1.771-1.153a4.904 4.904 0 0 1-1.154-1.772c-.247-.637-.415-1.363-.465-2.427a74.367 74.367 0 0 1-.03-.712l-.005-.194A79.053 79.053 0 0 1 2 13.028v-2.056a78.82 78.82 0 0 1 .022-2.188l.007-.194c.008-.224.018-.446.03-.712c.05-1.065.218-1.79.465-2.428A4.88 4.88 0 0 1 3.68 3.68a4.897 4.897 0 0 1 1.77-1.155c.638-.247 1.363-.415 2.428-.465l.712-.03l.194-.005A79.053 79.053 0 0 1 10.972 2h2.056Zm-1.028 5A5 5 0 1 0 12 17a5 5 0 0 0 0-10Zm0 2A3 3 0 1 1 12.001 15a3 3 0 0 1 0-6Zm5.25-3.5a1.25 1.25 0 0 0 0 2.498a1.25 1.25 0 0 0 0-2.5Z"/></svg></div>
            </div>
            </div>
            
        <div class="right-side">
            <div class="host-info">
                <h3>Aman Dhattarwal</h3>
                <h4><b>Founder Of Apana College</b></h4>
                <div class="r-side">
                    <p><ul>
                        <li>
                            <div class="dot"></div>
                            <h4>Mechanical Engineering From VIIT</h4>
                            <p>you can book our cabs online using our latest platform</p>
                        </li>
                        <li>
    
                            <div class="dot"></div>
                            <h4>Journey Of Being Full Stack Developer</h4>
                            <p>you can book our cabs online using our latest platform</p>
                            <div class="dot last"></div>
                        </li>
                        <li>
    
                            <div class="dot"></div>
                            <h4>Journey Of Starting Own Business</h4>
                            <p>you can book our cabs online using our latest platform</p>
                            <div class="dot last"></div>
                        </li>
                        <li>
    
    <div class="dot"></div>
    <h4>Marrige With Shraddha Didi</h4>
    <p>you can book our cabs online using our latest platform</p>
    <div class="dot last"></div>
</li>
                    </ul></p>
                </div>
            </div>
            <div class="schedule">
                <p>4 November 2023 11:30 PM</p>
            </div>
            <div class="btn"><a href="/register">Register Now</a></div>
        </div>
    </section>


    <section class="heading">
        <h2>About Our Platform</h2>
        <p>Stay tuned for our upcomming platform for consultation</p>
    </section>
    <section class="about-platform">
        <div class="cards">
            <div class="single-card">
                <h4><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="#6000F9" d="M2 11C2 5.477 6.477 1 12 1s10 4.477 10 10v5.154C22 17.8 20.58 19 19 19h-3v-8h4a8 8 0 1 0-16 0h4v8H6.063A2 2 0 0 0 8 20.5h1.564c.316-.453.841-.75 1.436-.75h2a1.75 1.75 0 1 1 0 3.5h-2c-.595 0-1.12-.297-1.436-.75H8a4 4 0 0 1-3.986-3.66C2.874 18.463 2 17.446 2 16.155V11Zm4 6v-4H4v3.154c0 .393.37.846 1 .846h1Zm14-4h-2v4h1c.63 0 1-.453 1-.846V13Z"/></svg></h4>
                <h3>One to One Consultation</h3>
                <p>Get one to one consultation from industry experts and achiver's</p>
            </div>
            <div class="single-card">
                <h4><svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 20 20"><path fill="#6000F9" d="M2.727 3.333c-.753 0-1.363.597-1.363 1.334v10.666c0 .737.61 1.334 1.363 1.334h14.546c.753 0 1.363-.597 1.363-1.334V4.667c0-.737-.61-1.334-1.363-1.334H2.727ZM17.273 2C18.779 2 20 3.194 20 4.667v10.666C20 16.806 18.779 18 17.273 18H2.727C1.221 18 0 16.806 0 15.333V4.667C0 3.194 1.221 2 2.727 2h14.546ZM8.167 13.133H4a.674.674 0 0 0-.682.667c0 .368.305.667.682.667h4.167a.674.674 0 0 0 .681-.667a.674.674 0 0 0-.681-.667Zm5.583-7.8c-1.524 0-2.765 1.191-2.765 2.667c0 .773.34 1.468.884 1.955c-1.03.608-1.717 1.703-1.717 2.954c0 .357.056.708.165 1.043c.115.35.499.544.857.432a.664.664 0 0 0 .442-.838a2.043 2.043 0 0 1-.1-.637c0-1.175.997-2.133 2.234-2.133s2.235.958 2.235 2.133c0 .173-.021.342-.063.506a.666.666 0 0 0 .497.808a.683.683 0 0 0 .826-.486c.069-.27.103-.547.103-.828c0-1.251-.687-2.346-1.717-2.956c.544-.485.884-1.18.884-1.953c0-1.476-1.24-2.667-2.765-2.667Zm-5.583 4.3H4a.674.674 0 0 0-.682.667c0 .368.305.667.682.667h4.167a.674.674 0 0 0 .681-.667a.674.674 0 0 0-.681-.667Zm5.583-2.966c.777 0 1.402.6 1.402 1.333c0 .734-.625 1.333-1.402 1.333c-.777 0-1.402-.6-1.402-1.333c0-.734.625-1.333 1.402-1.333Zm-5.583-.534H4a.674.674 0 0 0-.682.667c0 .368.305.667.682.667h4.167a.674.674 0 0 0 .681-.667a.674.674 0 0 0-.681-.667Z"/></svg></h4>
                <h3>All varified Consultant</h3>
                <p>All consultant on our platform are varified and are capable of solving your problem's</p>
            </div>
            <div class="single-card">
                <h4><svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 48 48"><path fill="#6000F9" d="M15 17a6 6 0 1 0 0-12a6 6 0 0 0 0 12Zm18 0a6 6 0 1 0 0-12a6 6 0 0 0 0 12ZM4 22.446A3.446 3.446 0 0 1 7.446 19h9.624A7.963 7.963 0 0 0 16 23a7.98 7.98 0 0 0 2.708 6h-2.262a5.444 5.444 0 0 0-4.707 2.705c-3.222-.632-5.18-2.203-6.32-3.968C4 25.54 4 23.27 4 22.877v-.43ZM31.554 29a5.444 5.444 0 0 1 4.707 2.705c3.222-.632 5.18-2.203 6.32-3.968C44 25.54 44 23.27 44 22.877v-.43A3.446 3.446 0 0 0 40.554 19H30.93A7.963 7.963 0 0 1 32 23a7.98 7.98 0 0 1-2.708 6h2.262ZM30 23a6 6 0 1 1-12 0a6 6 0 0 1 12 0ZM13 34.446A3.446 3.446 0 0 1 16.446 31h15.108A3.446 3.446 0 0 1 35 34.446v.431c0 .394 0 2.663-1.419 4.86C32.098 42.033 29.233 44 24 44s-8.098-1.967-9.581-4.263C13 37.54 13 35.27 13 34.877v-.43Z"/></svg></h4>
                <h3>Diverse consultant's</h3>
                <p>Problem's are diverse, solve your any problem's from diverse consultant's </p>
            </div>
            <div class="single-card">
                <h4><svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 48 48"><mask id="ipSBabyApp0"><g fill="none"><path stroke="#fff" stroke-linecap="round" stroke-width="4" d="M43 26v6a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V12a2 2 0 0 1 2-2h9"/><path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M4 40h40"/><circle cx="30" cy="17" r="9" fill="#fff" stroke="#fff" stroke-width="4"/><path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M19 18v-2m22 2v-2M30 8c-.167-1-1.2-3.2-4-4m4 4c.083-1 .6-3.2 2-4"/><circle cx="33" cy="16" r="2" fill="#000"/><circle cx="27" cy="16" r="2" fill="#000"/></g></mask><path fill="#6000F9" d="M0 0h48v48H0z" mask="url(#ipSBabyApp0)"/></svg></h4>
                <h3>Easy to use</h3>
                <p>Connect to any consultant with just few click's</p>
            </div>
        </div>
        <div class="email-input">
            <div class="email-text">
                <h2>Get Update's Of Our Platform</h2>
                <p> Our platform will be launched soon, stay updated to get the early access and special discount's</p>
            </div>
            <div class="input-field">
                <form action="/" method="POST">
                   
                    <input type="email" name="email" placeholder="Enter your Email"/>
                    <button type="submit">Get Update's</button>
                </form>
            </div>
        </div>
    </section>
      </LandingPageStyle>
    </div>
  )
}

export default LandingPage
