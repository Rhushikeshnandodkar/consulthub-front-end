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
          <p>ConsultHub offers users a comprehensive solution for accessing expert advice, personalized consultations, and practical solutions to their specific problems. By leveraging the benefits of our platform, users can navigate challenges with confidence, make informed decisions, and achieve their goals effectively</p>
        </div>
      </div>
      <div className="about-section">
        <div className="about-solving">
          <h2>What problem we are solving</h2>
          <div className="problem">
            <h3>Access to Expertise</h3>
            <p>Our platform provides users with access to a diverse pool of industry experts spanning various fields and disciplines. Whether you're seeking advice on career choices, personal development, or business strategies, you can connect with knowledgeable professionals who have the expertise to address your specific needs</p>
          </div>
          <div className="problem">
            <h3>Tailored Consultations</h3>
            <p>We offer personalized consultations tailored to each user's unique challenges and goals. Through one-on-one sessions with experts, users can receive customized guidance and actionable insights that directly apply to their situation, maximizing the effectiveness of the advice received</p>
          </div>
          <div className="problem">
            <h3>Flexible Communication</h3>
            <p>Our platform supports multiple communication channels, including video calls, audio calls, and chat sessions, allowing users to choose the mode of communication that best suits their preferences and comfort level. This flexibility ensures that users can engage with experts in a way that feels most natural to them</p>
          </div>
          <div className="problem">
            <h3>Transparency and Trust</h3>
            <p>All consultants on our platform undergo a rigorous verification process to ensure their credibility and expertise. Users can trust that they are receiving advice from qualified professionals who have been vetted and verified, fostering a sense of transparency and trust in the consultation process</p>
          </div>
          <div className="problem">
            <h3>Problem-Solving Approach</h3>
            <p>Our platform is dedicated to helping users solve specific problems and overcome challenges they may be facing. Whether it's navigating career transitions, overcoming obstacles in personal growth, or developing strategies for business success, our experts are equipped to provide practical solutions and actionable recommendations to drive positive outcomes</p>
          </div>
          <div className="problem">
            <h3>Convenience and Accessibility</h3>
            <p>With our easy-to-use platform, users can conveniently schedule consultations with experts at their preferred time and from the comfort of their own space. This accessibility ensures that expert advice is readily available whenever users need it, eliminating barriers to seeking guidance and support</p>
          </div>
          <div className="problem">
            <h3>Community Support</h3>
            <p>By joining our platform, users become part of a supportive community where knowledge sharing and collaboration thrive. Whether it's connecting with like-minded individuals, sharing experiences, or seeking advice from peers, our platform fosters a sense of belonging and camaraderie among users, enriching their overall consultation experience</p>
          </div>
          
        </div>
      </div>
      </AboutStyle>
      <Footer/>
    </div>
  )
}

export default About
