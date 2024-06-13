import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Navigate, useNavigate, useLocation } from 'react-router-dom'
import { getOtp, userLogin, varifyOtp } from '../../features/userAuth/userSlice'
import imageUrl from "../../images/login.png"
import googleLogo from "../../images/google-logo.png"
import { Link } from 'react-router-dom'
import { LoginPageStyle } from './consultents.style'
import Navbar from '../molecules/Navbar'

function VarifyOtp() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const {user, userToken, status} = useSelector((state) => ({
    ...state.user
  }))

  const[formData, setFormData] = useState({
    otp : "",
  })
  const onChange = (e) =>{
    const {name, value} = e.target 
    setFormData({...formData, [name]: value})
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    const {otp} = formData
    dispatch(varifyOtp({otp})) 
    if (status==200){
      return navigate('/create-profile')
    }
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
        {status==401 ? <><div className="alert"><h6>Please enter valid otp</h6></div></> : <></>}
        {/* {status==409 ? <><div className="alert"><h6>This phone number allredy taken</h6></div></> : <></>} */}

        <h2>Enter Otp</h2>
        <h4>Enter your otp to save your mobile number</h4>
        {/* <h3><b>Best of Luck</b></h3> */}
      <form action="" onSubmit={handleSubmit}>
        <input type="text" id='username' placeholder='Enter Otp e.g. 343245' name='otp' value={formData.otp} onChange={onChange}/>
        <button type='submit'>Submit otp now</button>
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

export default VarifyOtp
