import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { fetchConsultentReviews, fetchSingleConsultent } from '../../features/consultents/consultentSlice'
import Navbar from '../molecules/Navbar'
import { ConsutltentDetails } from './consultents.style'
import { useNavigate } from 'react-router-dom'
import { fetchConsultentCalender } from '../../features/consultents/consultentSlice'
import { bookMeeting } from '../../features/bookings/bookingSlice'
import ReviewCards from '../molecules/ReviewCards'
import Loader from '../molecules/Loader'
function ConsultentDetail() {
  const navigate = useNavigate()
  const {id} = useParams()
  const {singleconsultent,slots, isReview,reviews,  isLoading} = useSelector((state) =>({
    ...state.consultent
  }))
  const[formData, setFormData] = useState((state) =>({
    loggedUser: null,
    loggedConsultent : null
  }))
  const {userToken,user, isAuthenticated} = useSelector((state) =>({
    ...state.user
  }))
  const [fees, setFees] = useState(null)
  const dispatch = useDispatch()
  useEffect(() =>{
    dispatch(fetchSingleConsultent(id))
    dispatch(fetchConsultentReviews(id))
  }, [dispatch])
  const [clicked, setClicked] = useState(false)
  const stars = Array.from({length:5}, (_, index) =>{
    if(singleconsultent && !isLoading){
      const isFilled = index < singleconsultent.average_rating.rating__avg;
    return isFilled ? <div className="bright-star"><svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 24 24"><path fill="#6000f9" d="m5.825 22l1.625-7.025L2 10.25l7.2-.625L12 3l2.8 6.625l7.2.625l-5.45 4.725L18.175 22L12 18.275z"/></svg></div> : <div className="star"><svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 24 24"><path fill="#cbbee0" d="m5.825 22l1.625-7.025L2 10.25l7.2-.625L12 3l2.8 6.625l7.2.625l-5.45 4.725L18.175 22L12 18.275z"/></svg></div>
    }
  })
  const feesValue = (event) =>{
    if(singleconsultent && !isLoading){
      const first_val = event.target.value[0].toString()
      const second_val = event.target.value[1].toString()
      const final_num = first_val + second_val
      setFees(final_num* singleconsultent.rate)
      setClicked(true)
    }
  }
  const bookMeetingbutton = () =>{
    if(!userToken || !isAuthenticated){
      return navigate("/user-login")
    }else{
      console.log(user.id)
      setFormData()
      dispatch(bookMeeting({"booking_user" : user.id, "consultent": singleconsultent.id, "amount": fees}))
      return navigate("/thank-you")
    }
  }
  return (
    <div>
      <Navbar/>
      {!singleconsultent || isLoading && (
        <Loader/>
      )
      }
      {singleconsultent && !isLoading && (
        <>
        <ConsutltentDetails>
          <div className="consultent-details">
             <div className="first-box">
              <div className="image-section">
                <img src={`${singleconsultent.profile_image}`} alt="" />
              </div>
              <div className="text-section">
                <h3>{singleconsultent.consultent_name}</h3>
                <p>{singleconsultent.title}</p>
                <div className="constultations">
                  <div className="consultation-completed">
                    <p>Consultations Completed</p>
                    <b>{singleconsultent.total_meetings}%</b>
                  </div>
                  <div className="consultation-completed">
                    <p>Consultations Cancelled</p>
                    <b>{singleconsultent.meetings_cancelled}%</b>
                  </div>
                </div>
              <div className="rating">
                  {stars}
              </div>
              <div className="description">
              <ul>
                    {singleconsultent.category.map((values) =>(
                        <li key={values.id}>{values.cateogry_field}</li>
                    ))}
                </ul>
              </div>
              <div className="minute-sections">
              <input type="submit" onClick={feesValue}  className="btn" value={`${5} min`}/>
              <input type="submit" className="btn" onClick={feesValue} value={`${15} min`}/>
              <input type="submit" className="btn" onClick={feesValue} value={`${30} min`}/>
              </div>
              <div className="fees">
                <b>Fees</b>
                Rs. {!clicked ? <>{singleconsultent.rate}</> : <>{fees}</>}/-
              </div>
              <button onClick={bookMeetingbutton} className="btn">Book Meeting </button>
              </div>
             </div>
          </div>
          {/* <div className="second-section">
            <div className="calender-section">
              <div className="select-days">
              
                <div className="day active">
                  <h3>Today</h3>
                  <p>5 Slots Available</p>
                </div>
                <div className="day">
                  <h3>Tomarrow</h3>
                  <p>5 Slots Available</p>
                </div>
                <div className="day">
                  <h3>After</h3>
                  <p>5 Slots Available</p>
                </div>
              </div>
                <h3 className='head'>Morning</h3>
              <div className="blocks-section">
                <div className="blocks active">
                  <div className="single-block"><h3>10:30 PM</h3></div>
                </div>
                <div className="blocks">
                  <div className="single-block"><h3>10:30 PM</h3></div>
                </div>
                <div className="blocks">
                  <div className="single-block"><h3>10:30 PM</h3></div>
                </div>
                <div className="blocks">
                  <div className="single-block"><h3>10:30 PM</h3></div>
                </div>
                <div className="blocks">
                  <div className="single-block"><h3>10:30 PM</h3></div>
                </div>
                <div className="blocks">
                  <div className="single-block"><h3>10:30 PM</h3></div>
                </div>
              </div>

              <h3 className='head'>Morning</h3>
              <div className="blocks-section">
                <div className="blocks">
                  <div className="single-block"><h3>10:30 AM</h3></div>
                </div>
                <div className="blocks">
                  <div className="single-block"><h3>10:30 AM</h3></div>
                </div>
                <div className="blocks">
                  <div className="single-block"><h3>10:30 AM</h3></div>
                </div>
                <div className="blocks">
                  <div className="single-block"><h3>10:30 AM</h3></div>
                </div>
              </div>

            </div>
            <div className="description-section">

            </div>
          </div> */}
          <div className="user-description">
            <h3>About Consultent</h3>
          <p>{singleconsultent.description}</p>
          <ul>
            <h4>Preferred Languages</h4>
                    {singleconsultent.languages.map((values) =>(
                        <li key={values.id}>{values.language_field}</li>
                    ))}
                </ul>
          </div>
          <div className="review-section">
          <div className="heading"><h2>Reviews</h2></div>
           {isReview && reviews.map((val) =>(
            <>
            <ReviewCards data={val}/>
            </>
           ))}
            
          </div>
        </ConsutltentDetails>
        </>
      )
      }
    </div>
  )
}

export default ConsultentDetail
