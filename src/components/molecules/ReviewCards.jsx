import React, { useEffect } from 'react'
import { ReviewCardStyle } from './molecule.style'
import { useDispatch } from 'react-redux'
import { fetchConsultentReviews } from '../../features/consultents/consultentSlice'
function ReviewCards(data) {
  const stars = Array.from({length:5}, (_, index) =>{
    if(data){
      const isFilled = index < data.data.rating;
    return isFilled ? <div className="bright-star"><svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 24 24"><path fill="#6000f9" d="m5.825 22l1.625-7.025L2 10.25l7.2-.625L12 3l2.8 6.625l7.2.625l-5.45 4.725L18.175 22L12 18.275z"/></svg></div> : <div className="star"><svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 24 24"><path fill="#cbbee0" d="m5.825 22l1.625-7.025L2 10.25l7.2-.625L12 3l2.8 6.625l7.2.625l-5.45 4.725L18.175 22L12 18.275z"/></svg></div>
    }
  })
  return (
    <ReviewCardStyle>
    <div>
      <div className="card-section">
        <h4>{data.data.user_name}</h4>

      <div className="date"><p>{data.data.date}</p></div>
        <div className="rating">
      {stars}
        </div>
        <h5>{data.data.review_title}</h5>
        <p>{data.data.review_text}</p>
      </div>
    </div>
    </ReviewCardStyle>
  )
}

export default ReviewCards
