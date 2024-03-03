import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Navigate, useNavigate, useLocation } from 'react-router-dom'
import { getOtp, userLogin } from '../../features/userAuth/userSlice'
import imageUrl from "../../images/login.png"
import googleLogo from "../../images/google-logo.png"
import { Link } from 'react-router-dom'
import { LoginPageStyle } from './consultents.style'
import Navbar from '../molecules/Navbar'

function GetOtp() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const {user, userToken, status} = useSelector((state) => ({
    ...state.user
  }))

  const[formData, setFormData] = useState({
    phone : "",
  })
  const onChange = (e) =>{
    const {name, value} = e.target 
    setFormData({...formData, [name]: value})
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    const {phone} = formData
    dispatch(getOtp({phone})) 
    localStorage.setItem("user_phone", phone)
  }
  if(status == 200){
    return navigate("/varify-otp")
  }
    if(!user&& !userToken){
      return navigate("/user-login")
    }
  

  return (
    <div>
  <Navbar/>
      <LoginPageStyle>
      <div className="login-page">
      <div className="form-section">
        {status==401 ? <><div className="alert"><h6>Please Enter Valid Details</h6></div></> : <></>}
        {status==409 ? <><div className="alert"><h6>This phone number allredy taken</h6></div></> : <></>}

        <h2>Login To Connect</h2>
        <h4>Login here to connect our best consultents</h4>
        <h3><b>Best of Luck</b></h3>
      <form action="" onSubmit={handleSubmit}>
        <input type="text" id='username' placeholder='Enter Your Phone number' name='phone' value={formData.phone} onChange={onChange}/>
        <button type='submit'>Get Otp Now</button>
      </form>
      </div>

    <div className="image-section">
        <div className="image-part">
          <img src={imageUrl} alt="" />
        </div>
      </div>
    </div>
      </LoginPageStyle>
    </div>
  )
}

export default GetOtp
