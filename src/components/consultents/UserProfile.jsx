import React, { useEffect, useState } from 'react'
import { EditProfileStyle } from './consultents.style'
import Navbar from '../molecules/Navbar'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import Loader from '../molecules/Loader'
import { getUserBookings, getUserInfo } from '../../features/userAuth/userSlice'
function UserProfile() {
    const dispatch = useDispatch()
    const { user, bookings } = useSelector((state) => ({
        ...state.user
    }))
    const [userInfo, setUserInfo] = useState(null)
    useEffect(() =>{
        dispatch(getUserInfo())
        dispatch(getUserBookings())
    }, [dispatch])
    if(bookings){
      bookings.map((val) =>(
        console.log(val)
      ))
    }
  return (
    <div>
      <EditProfileStyle>
        <Navbar/>
            <div className="heading"><h1>Your Profile</h1></div>
        <div className="profile-info-section">
            {
                user ? 
                <>
                            <div className="profile">
                <h2><b>First Name</b> : {user.first_name}</h2>
                <h2><b>Last Name</b> : {user.last_name}</h2>
                <h2><b>Email</b> : {user.email}</h2>
                <h2><b>Phone Number</b> : {user.phone_number}</h2>
               <h2><b>Interests</b> :  <ul>
                {
                      user.interests.map((val) =>(
                        <li>{val.interest}</li>
                      ))
                }
                </ul></h2>
            </div></> : <Loader/>
            }
            <div className="edit-icon">
            <Link to="/create-profile"><svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24"><path fill="currentColor" d="m7 17.013l4.413-.015l9.632-9.54c.378-.378.586-.88.586-1.414s-.208-1.036-.586-1.414l-1.586-1.586c-.756-.756-2.075-.752-2.825-.003L7 12.583zM18.045 4.458l1.589 1.583l-1.597 1.582l-1.586-1.585zM9 13.417l6.03-5.973l1.586 1.586l-6.029 5.971L9 15.006z"/><path fill="currentColor" d="M5 21h14c1.103 0 2-.897 2-2v-8.668l-2 2V19H8.158c-.026 0-.053.01-.079.01c-.033 0-.066-.009-.1-.01H5V5h6.847l2-2H5c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2"/></svg></Link>
            </div>
        </div>
        <div className="heading"><h1>Your Bookings</h1></div>
        <div className="booked-table">
          <table>
            <thead>
              <th>Consultent Name</th>
              <th>Date</th>
              <th>Amount</th>
              <th>Is Paid</th>
            </thead>
            <tbody>
              {bookings && bookings.map((val) => (
                <>
                <tr>
                <td>{val.consultent.consultent_name}</td>
                <td>{val.date}</td>
                <td>Rs. {val.amount}/-</td>
               
                <td> {!val.is_paid ? <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 15 15"><path fill="red" d="M3.64 2.27L7.5 6.13l3.84-3.84A.92.92 0 0 1 12 2a1 1 0 0 1 1 1a.9.9 0 0 1-.27.66L8.84 7.5l3.89 3.89A.9.9 0 0 1 13 12a1 1 0 0 1-1 1a.92.92 0 0 1-.69-.27L7.5 8.87l-3.85 3.85A.92.92 0 0 1 3 13a1 1 0 0 1-1-1a.9.9 0 0 1 .27-.66L6.16 7.5L2.27 3.61A.9.9 0 0 1 2 3a1 1 0 0 1 1-1c.24.003.47.1.64.27"/></svg>: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 15 15"><path fill="green" fill-rule="evenodd" d="M0 7.5a7.5 7.5 0 1 1 15 0a7.5 7.5 0 0 1-15 0m7.072 3.21l4.318-5.398l-.78-.624l-3.682 4.601L4.32 7.116l-.64.768z" clip-rule="evenodd"/></svg>}</td>
              </tr>
                </>
              ))}
            </tbody>
          </table>
        </div>

      </EditProfileStyle>
    </div>
  )
}

export default UserProfile