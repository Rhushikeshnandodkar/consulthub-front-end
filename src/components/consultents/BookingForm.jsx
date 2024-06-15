import React, { useState, useEffect } from 'react'
import Navbar from '../molecules/Navbar'
import { useParams } from 'react-router-dom';
import { CreateUserProfileStyle } from './consultents.style'
import { useDispatch, useSelector } from 'react-redux';
import { eventWrapper } from '@testing-library/user-event/dist/utils';
import { createProfile, getInterests } from '../../features/userAuth/userSlice';
import { useNavigate } from 'react-router-dom';
import { fetchSingleConsultent } from '../../features/consultents/consultentSlice';
import Footer from '../molecules/Footer';
import { bookMeeting } from '../../features/bookings/bookingSlice';
function BookingForm() {
  const navigate = useNavigate()
  const {consultId} = useParams()
  const dispatch = useDispatch()
  const {interests, isLoading, user, userToken} = useSelector((state) => ({
    ...state.user
  }))
  const {status} = useSelector((state) =>({
    ...state.booking
  }))
  const [bookingInfo, setBookingInfo] = useState({consultent : consultId, date : "", time : "", question: ""})

  useEffect(() =>{
    dispatch(fetchSingleConsultent(consultId))
  }, [dispatch])


  if(!user){
    return navigate('/')
  }
  const onChange = (e) =>{
    const {name, value} = e.target 
    setBookingInfo({...bookingInfo, [name]: value})
  }
 
  const handleSubmit = (e) =>{
    e.preventDefault()
    const {consultent : consultId, date, time, question} = bookingInfo
    console.log(consultId)
    dispatch(bookMeeting({consultent: consultId, question: question, meeting_date: date, meeting_time: time}))
    if(status==200){
        return navigate("/thank-you")
    }
    }





  const headingStyle = {
    padding : '1% 0'
  }
  const textfieldStyle = {
    padding : '0.6% 1.5% 6% 0.5%'
  }

  return (
    <div>
      <Navbar/>
      <CreateUserProfileStyle>
        <div className="heading">
          <h1>Book Counsultant</h1>
        </div>
        <div className="form-section">
        {status==401 ? <><div className="alert"><h6>Put valid data into form</h6></div></> : <></>}
        {/* {status==200 ? <><div className="success"><h6>Data Saved Successfully</h6></div></> : <></>} */}

          <form action="" onSubmit={handleSubmit}>
          <div className="form-text">
              <h4 style={headingStyle}>Select your preffered date and time slot</h4>
              {/* <p>Enter your phone number so that we can connect with you and make meeting between you and consultent you are looking for</p> */}
            </div>
            <div className="first-line">
              <input type="date" placeholder='Enter Your First Name' name="date" value={bookingInfo.date} onChange={onChange}/>
              <input type="time" placeholder='Enter Your Last Name' name="time" value={bookingInfo.time} onChange={onChange}/>
            </div>
            <div className="form-text">
              <h4 style={headingStyle}>What question you want to ask our consultant? </h4>
              {/* <p>Enter your phone number so that we can connect with you and make meeting between you and consultent you are looking for</p> */}
            </div>
            <input style={textfieldStyle} type="text" placeholder='Enter Your Question' name="question" value={bookingInfo.question} onChange={onChange}/>
          
           
           <button className="btn">Book Meeting</button>
          </form>
        </div>
      </CreateUserProfileStyle>
      <Footer/>
    </div>
  )
}

export default BookingForm
