import React, { useEffect } from 'react'
import { LandingPageStyle } from './common.style'
import Navbar from '../molecules/Navbar'
import Instructor from '../../images/ankit1.jpeg'
import Video from '../../images/phonevideo.mp4'
import Footer from '../molecules/Footer'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { fetchEventData } from '../../features/consultents/eventSlice'
import Loader from '../molecules/Loader'
import { url } from './api'
function LandingPage() {
    const dispatch = useDispatch()
    const {eventLoading, eventData, eventError} = useSelector((state) => ({
        ...state.events
    }))
    useEffect(() => {
        dispatch(fetchEventData())
    }, [dispatch])
  return (
    <>
    <div>
    <Navbar/>
      <LandingPageStyle>
        
      <section className="text-section">
            <div className="text">
               <div className="main-text">
                {/* <h1>A Place Where  Connect's With  And Get Consultation.</h1> */}
                <h1>Connecting <b>People</b> with <b>Industry Experts</b> for Personalized Consultations</h1>
                <p>Chat with experts who have all the answers, whether it's choosing the coolest clothes or learning new skills.</p>
                <div className="btn"><a href="https://chat.whatsapp.com/Gk528qEXbjNKLMkmDfDC7w">Our Upcomming Session</a><Link to="/consultents" className='active'>Book Consultant Now</Link></div>
               </div>
            </div>
    </section>
    <section className="guarentee">
        <div className="left-side">
            <h3>Instant Appointment with our <b>Consultant</b></h3>
            <p><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path fill="none" stroke="#6000f9" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m2.75 8.75l3.5 3.5l7-7.5"/></svg><b>8+</b> varified consultent</p>
            <p><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path fill="none" stroke="#6000f9" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m2.75 8.75l3.5 3.5l7-7.5"/></svg><b>158+</b> successful mettings</p>
            <p><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path fill="none" stroke="#6000f9" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m2.75 8.75l3.5 3.5l7-7.5"/></svg><b>117+</b> satisfied customers</p>
            <div className="btn"><Link to="/consultents">Book Consultants</Link></div>
        </div>
        <div className="right-side">
        <video autoPlay loop muted>
            <source src={Video}/>
        </video>
        </div>
    </section>
    <section class="heading">
        <h2>Our Upcomming Session</h2>
        <p>We are going to host a <b>Free</b> online session with industry expert for you.</p>
    </section>

   {eventLoading ? <p>Loading...</p>: 
    <>{eventData && 
        <>
            
        <section class="session-section" id='upsession'>
            <div class="left-side">
                <div class="host-image"><img src={`${url}/${eventData.profile_image}`} alt=""/>
                    <div class="social-icons">
                       <Link to={eventData.linkedin_url}> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path  d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77Z"/></svg></Link></div>
                </div>
                </div>
                 
            <div class="right-side">
                <div class="host-info">
                    <h3>{eventData.speaker_name}</h3>
                    <h4><b>{eventData.speaker_tagline}</b></h4>
                    <div class="r-side">
                        <p><ul>
                            <li>
                                <div class="dot"></div>
                                <h4>{eventData.achievement_one}</h4>
                                <p>{eventData.subachievement_one}</p>
                            </li>
                            <li>
                                <div class="dot"></div>
                                <h4>{eventData.achievement_two}</h4>
                                <p>{eventData.subachievement_two}</p>
                            </li>
                            <li>
                                <div class="dot"></div>
                                <h4>{eventData.achievement_three}</h4>
                                <p>{eventData.subachievement_three}</p>
                            </li>
                            <li>
                                <div class="dot"></div>
                                <h4>{eventData.achievement_four}</h4>
                                <p>{eventData.subachievement_four}</p>
                            </li>
                        </ul></p>
                    </div>
                </div>
                <div class="schedule">
                    <p><b>Date : </b>{eventData.event_date} <br /> <b>Time : </b> {eventData.event_time}</p>
                </div>
                <div class="btn"><a href="/register">Register Now</a></div>
            </div>
        </section>
        </>
    }</>
   
   }


    <section class="heading">
        <h2>About Our Platform</h2>
        <p>Stay tuned for our upcoming platform for tailored consultations</p>
    </section>
    <section class="about-platform">
        <div class="cards">
            <div class="single-card">
                <h4><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="#6000F9" d="M2 11C2 5.477 6.477 1 12 1s10 4.477 10 10v5.154C22 17.8 20.58 19 19 19h-3v-8h4a8 8 0 1 0-16 0h4v8H6.063A2 2 0 0 0 8 20.5h1.564c.316-.453.841-.75 1.436-.75h2a1.75 1.75 0 1 1 0 3.5h-2c-.595 0-1.12-.297-1.436-.75H8a4 4 0 0 1-3.986-3.66C2.874 18.463 2 17.446 2 16.155V11Zm4 6v-4H4v3.154c0 .393.37.846 1 .846h1Zm14-4h-2v4h1c.63 0 1-.453 1-.846V13Z"/></svg></h4>
                <h3>One to One Consultation</h3>
                <p>Receive personalized guidance from industry experts and achievers</p>
            </div>
            <div class="single-card">
                <h4><svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 20 20"><path fill="#6000F9" d="M2.727 3.333c-.753 0-1.363.597-1.363 1.334v10.666c0 .737.61 1.334 1.363 1.334h14.546c.753 0 1.363-.597 1.363-1.334V4.667c0-.737-.61-1.334-1.363-1.334H2.727ZM17.273 2C18.779 2 20 3.194 20 4.667v10.666C20 16.806 18.779 18 17.273 18H2.727C1.221 18 0 16.806 0 15.333V4.667C0 3.194 1.221 2 2.727 2h14.546ZM8.167 13.133H4a.674.674 0 0 0-.682.667c0 .368.305.667.682.667h4.167a.674.674 0 0 0 .681-.667a.674.674 0 0 0-.681-.667Zm5.583-7.8c-1.524 0-2.765 1.191-2.765 2.667c0 .773.34 1.468.884 1.955c-1.03.608-1.717 1.703-1.717 2.954c0 .357.056.708.165 1.043c.115.35.499.544.857.432a.664.664 0 0 0 .442-.838a2.043 2.043 0 0 1-.1-.637c0-1.175.997-2.133 2.234-2.133s2.235.958 2.235 2.133c0 .173-.021.342-.063.506a.666.666 0 0 0 .497.808a.683.683 0 0 0 .826-.486c.069-.27.103-.547.103-.828c0-1.251-.687-2.346-1.717-2.956c.544-.485.884-1.18.884-1.953c0-1.476-1.24-2.667-2.765-2.667Zm-5.583 4.3H4a.674.674 0 0 0-.682.667c0 .368.305.667.682.667h4.167a.674.674 0 0 0 .681-.667a.674.674 0 0 0-.681-.667Zm5.583-2.966c.777 0 1.402.6 1.402 1.333c0 .734-.625 1.333-1.402 1.333c-.777 0-1.402-.6-1.402-1.333c0-.734.625-1.333 1.402-1.333Zm-5.583-.534H4a.674.674 0 0 0-.682.667c0 .368.305.667.682.667h4.167a.674.674 0 0 0 .681-.667a.674.674 0 0 0-.681-.667Z"/></svg></h4>
                <h3>All varified Consultant</h3>
                <p>All consultants on our platform are verified and capable of solving diverse problems</p>
            </div>
            <div class="single-card">
                <h4><svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 48 48"><path fill="#6000F9" d="M15 17a6 6 0 1 0 0-12a6 6 0 0 0 0 12Zm18 0a6 6 0 1 0 0-12a6 6 0 0 0 0 12ZM4 22.446A3.446 3.446 0 0 1 7.446 19h9.624A7.963 7.963 0 0 0 16 23a7.98 7.98 0 0 0 2.708 6h-2.262a5.444 5.444 0 0 0-4.707 2.705c-3.222-.632-5.18-2.203-6.32-3.968C4 25.54 4 23.27 4 22.877v-.43ZM31.554 29a5.444 5.444 0 0 1 4.707 2.705c3.222-.632 5.18-2.203 6.32-3.968C44 25.54 44 23.27 44 22.877v-.43A3.446 3.446 0 0 0 40.554 19H30.93A7.963 7.963 0 0 1 32 23a7.98 7.98 0 0 1-2.708 6h2.262ZM30 23a6 6 0 1 1-12 0a6 6 0 0 1 12 0ZM13 34.446A3.446 3.446 0 0 1 16.446 31h15.108A3.446 3.446 0 0 1 35 34.446v.431c0 .394 0 2.663-1.419 4.86C32.098 42.033 29.233 44 24 44s-8.098-1.967-9.581-4.263C13 37.54 13 35.27 13 34.877v-.43Z"/></svg></h4>
                <h3>Diverse consultant's</h3>
                <p>Solve any problem with ease by connecting with consultants from various backgrounds </p>
            </div>
            <div class="single-card">
                <h4><svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 48 48"><mask id="ipSBabyApp0"><g fill="none"><path stroke="#fff" stroke-linecap="round" stroke-width="4" d="M43 26v6a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V12a2 2 0 0 1 2-2h9"/><path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M4 40h40"/><circle cx="30" cy="17" r="9" fill="#fff" stroke="#fff" stroke-width="4"/><path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M19 18v-2m22 2v-2M30 8c-.167-1-1.2-3.2-4-4m4 4c.083-1 .6-3.2 2-4"/><circle cx="33" cy="16" r="2" fill="#000"/><circle cx="27" cy="16" r="2" fill="#000"/></g></mask><path fill="#6000F9" d="M0 0h48v48H0z" mask="url(#ipSBabyApp0)"/></svg></h4>
                <h3>Easy to use</h3>
                <p>Connect with any consultant in just a few clicks</p>
            </div>
        </div>
       
    </section>
      </LandingPageStyle>
    </div>
    <Footer/>
    </>
  )
}

export default LandingPage
