import React from 'react'
import { CardStyle } from './molecule.style'
function Cards(data) {
    console.log(data)
    console.log(data.data.category[0])
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
                
                <ul>
                    {data.data.category.map((values) =>(
                        <li key={values.id}>{values.cateogry_field}</li>
                        
                    ))}
                    <li>Business</li>

                </ul>
                <h4>${data.data.rate}/hr</h4>
                <button>Book Now</button>
            </div>
        </div>
      </CardStyle>
    </div>
  )
}

export default Cards
