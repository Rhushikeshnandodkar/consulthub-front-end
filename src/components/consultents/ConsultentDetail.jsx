import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { fetchConsultentReviews, fetchSingleConsultent, postReview, reviewAllowance } from '../../features/consultents/consultentSlice'
import Navbar from '../molecules/Navbar'
import { ConsutltentDetails } from './consultents.style'
import { useNavigate } from 'react-router-dom'
import { fetchConsultentCalender } from '../../features/consultents/consultentSlice'
import { bookMeeting } from '../../features/bookings/bookingSlice'
import ReviewCards from '../molecules/ReviewCards'
import Loader from '../molecules/Loader'
import Footer from '../molecules/Footer'
function ConsultentDetail() {
  const navigate = useNavigate()
  const {id} = useParams()
  const {singleconsultent,slots, reviewallowance, isReview,reviews,  isLoading} = useSelector((state) =>({
    ...state.consultent
  }))
  const [r_rating, setRating] = useState(0);

  const handleStarClick = (selectedRating) => {
    setReviewData({...reviewData, rating : selectedRating});
  };
  
  const[reviewData, setReviewData] = useState({
    review_title : "",
    review_text : "",
    rating : 0
  })
  const onChange = (e) =>{
    const {name, value} = e.target 
    setReviewData({...reviewData, [name]: value})
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    const {review_title, review_text, rating, user_name} = reviewData
    dispatch(postReview({review_title, review_text, rating, user_name: user.first_name,  uId: id}))
    return navigate(0)
  }
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
    dispatch(reviewAllowance(id))
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
  // const bookMeetingbutton = () =>{
  //   if(!userToken || !isAuthenticated){
  //     return navigate("/user-signup")
  //   }else{
  //     console.log(user.id)
  //     setFormData()
  //     if (!clicked){
  //       alert("please select time slot")
  //     }
  //     else{
  //       if(user["is_profile_completed"]){
  //         dispatch(bookMeeting({"booking_user" : user.id, "consultent": singleconsultent.id, "amount": fees}))
  //         return navigate("/thank-you")
  //       }else{
  //         return navigate("/get-otp")
  //       }
  //     }
  //   }
  // }
  const bookMeetingbutton = () =>{
    if(!userToken || !isAuthenticated){
          return navigate("/user-signup")
        }else{
          console.log(user.id)
          setFormData()
          if (!clicked){
            alert("please select time slot")
          }
          else{
            if(user["is_profile_completed"]){
              return navigate(`/bookconsult/${singleconsultent.id}/${singleconsultent.consultent_name}`)
            }else{
              return navigate("/get-otp")
            }
          }
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
                        <li key={values.id}>{values.interest}</li>
                    ))}
                </ul>
              </div>
              <div className="social-buttons">
              <ul>
                {singleconsultent.linkedin_url &&  <li><a href={`${singleconsultent.linkedin_url}`}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93zM6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37z"/></svg></a></li>}
                {singleconsultent.instagram_url &&  <li><a href={`${singleconsultent.instagram_url}`}><svg xmlns="http://www.w3.org/2000/svg" width="27" height="27" viewBox="0 0 24 24"><path fill="currentColor" d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4zm9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8A1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5a5 5 0 0 1-5 5a5 5 0 0 1-5-5a5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3"/></svg></a></li>}
                {singleconsultent.youtube_url &&  <li><a href={`${singleconsultent.youtube_url}`}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814M9.545 15.568V8.432L15.818 12z"/></svg></a></li>}
              </ul>
            </div>
              <div className="minute-sections">
              <input type="submit" onClick={feesValue}  className="btn" value={`${15} min`}/>
              <input type="submit" className="btn" onClick={feesValue} value={`${30} min`}/>
              <input type="submit" className="btn" onClick={feesValue} value={`${60} min`}/>
              </div>
              <div className="fees">
                <b>Fees</b>
                Rs. {!clicked ? <>Select Time</> : <>{fees}</>}/-
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
         {reviewallowance && reviewallowance.can_post ? <>
          <div className="write-review">
          <form action="" onSubmit={handleSubmit}>
            <div className="review-input">
            <label for="w3review">Write Review To Consultent :</label> <br />
            <input type="text" placeholder='    Review title' name='review_title' value={reviewData.review_title} onChange={onChange}/>
            <textarea id="w3review" placeholder="    Review" rows="4" cols="50" name='review_text' value={reviewData.review_text} onChange={onChange}>
            </textarea> <br />
            <div>
      <p>Rate this:</p>
      <div className="stars">
      {[1, 2, 3, 4, 5].map((star) => (
        <span
          key={star}
          style={{ cursor: 'pointer', marginRight: '5px' }}
          onClick={() => handleStarClick(star)}
        >
          {star <= reviewData.rating ? <div className="bright-star"><svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 24 24"><path fill="#6000f9" d="m5.825 22l1.625-7.025L2 10.25l7.2-.625L12 3l2.8 6.625l7.2.625l-5.45 4.725L18.175 22L12 18.275z"/></svg></div> : <div className="star"><svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 24 24"><path fill="#cbbee0" d="m5.825 22l1.625-7.025L2 10.25l7.2-.625L12 3l2.8 6.625l7.2.625l-5.45 4.725L18.175 22L12 18.275z"/></svg></div>}
        </span>
      ))}</div>
      {/* <p>Selected Rating: {rating}</p> */}
    </div>
            <button className="btn" type='Submit'>Submit Response</button>
            </div>
            </form>
          </div></>: <>
            cannot write review
          </>}
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
      <Footer/>
    </div>
  )
}

export default ConsultentDetail
