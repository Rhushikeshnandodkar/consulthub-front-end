import React, { useEffect, useState } from 'react'
import { EditProfileStyle } from './consultents.style'
import Navbar from '../molecules/Navbar'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import Loader from '../molecules/Loader'
import { getUserInfo } from '../../features/userAuth/userSlice'
function UserProfile() {
    const dispatch = useDispatch()
    const { user } = useSelector((state) => ({
        ...state.user
    }))
    const [userInfo, setUserInfo] = useState(null)
    useEffect(() =>{
        dispatch(getUserInfo())
    }, [])
    user.interests.map((val) =>{
        console.log(val.id)
    })
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

      </EditProfileStyle>
    </div>
  )
}

export default UserProfile