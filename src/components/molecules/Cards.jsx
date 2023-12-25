import React from 'react'
import { CardStyle } from './molecule.style'
import { Link } from 'react-router-dom'
function Cards(data) {
  return (
    <div>
      <CardStyle>
        <div className="single-card">
            <div className="image-section">
                <img src={`${data.data.profile_image}`} alt="" />
            </div>
            <div className="text-section">
                <h3>{data.data.consultent_name}</h3>
                <p>{data.data.title}</p>
                <p>{data.data.total_meetings} + consultations</p>
                <p>
                {/* <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24"><path fill="currentColor" d="m10 17l-4-4l1.41-1.41L10 14.17l6.59-6.59L18 9m-6-8L3 5v6c0 5.55 3.84 10.74 9 12c5.16-1.26 9-6.45 9-12V5z"/></svg>
                <b>Varified Profile</b> */}
                </p>
                <ul>
                    {data.data.category.map((values) =>(
                        <li key={values.id}>{values.cateogry_field}</li>
                        
                    ))}
                </ul>
                <h4>Rs. {data.data.rate}/- per Minute</h4>
                <button><Link to={`product-detail/${data.data.id}`}>See Profile </Link></button>
            </div>
        </div>
      </CardStyle>
    </div>
  )
}

export default Cards
