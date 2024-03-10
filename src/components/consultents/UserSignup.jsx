import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Navigate, useNavigate } from 'react-router-dom'
import { googleUserLogin, googleUserSignup, userLogin, userSignup } from '../../features/userAuth/userSlice'
import imageUrl from "../../images/login.png"
import googleLogo from "../../images/google-logo.png"
import { LoginPageStyle } from './consultents.style'
import { Link } from 'react-router-dom'
import Navbar from '../molecules/Navbar'
import { useGoogleLogin } from '@react-oauth/google'
import axios from 'axios'
import { useEffect } from 'react'
function UserSignup() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const[loginUser, setLoginUser] = useState([])
  const[passmatch, setPassmatch] = useState(false)
  const googleLogin = useGoogleLogin({
    onSuccess : (codeResponse) => SendToken(codeResponse),
    onError : (error) => console.log(error)
  })
  const SendToken = async (tokenInfo) => {
    console.log(tokenInfo.access_token)
    dispatch(googleUserSignup(tokenInfo.access_token))

  }

  const responseMessage = (response) => {
    console.log(response);
};
  const {user, userToken, isLoading, status} = useSelector((state) => ({
    ...state.user
  }))
  const[formData, setFormData] = useState({
    // username : "",
    email : "",
    password : "",
    password_again : "",
    // phone_number : ""
  })
  const onChange = (e) =>{
    const {name, value} = e.target 
    setFormData({...formData, [name]: value})
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    // dispatch(formData)
    console.log("submitted")
    const {email, password, password_again} = formData
    if(password==password_again){
      dispatch(userSignup({username: email, email, password, password_again}))

    if(status==200){
      return navigate("/get-otp")
    }
    }else{
      setPassmatch(true)
    }
  }
  if(status==200){
    return navigate("/get-otp")
  }
  return (
    <div>
      <Navbar/>
      <LoginPageStyle>
      <div className="login-page">
      <div className="form-section">
      {status==401 ? <><div className="alert"><h6>Please Enter Valid Details</h6></div></> : <></>}
      {passmatch ? <><div className="alert"><h6>Password did'n match</h6></div></> : <></>}

      {status==409 ? <><div className="alert"><h6>Email Allready Exist</h6></div></> : <></>}
        <h2>Signup To Connect</h2>
        <h4>Signup here to connect our best consultents</h4>
        <h3><b>Best of Luck</b></h3>
      <form action="" onSubmit={handleSubmit}>
        {/* <input type="text" id='username' placeholder='Enter Your Username' name='username' value={formData.username} onChange={onChange}/> */}
        {/* <input type="text" id='phone_number' placeholder='Enter Your Phone Number' name='phone_number' value={formData.phone_number} onChange={onChange}/> */}
        <input type="email" id='email' name="email" placeholder='Enter Your Email' value={formData.email} onChange={onChange}/>
        <input type="password" id='password' name="password" placeholder='Enter Your Password' value={formData.password} onChange={onChange}/>
        <input type="password" id='password_again' name="password_again" placeholder='Enter Your Password Again' value={formData.password_again} onChange={onChange}/>
        <button type='submit'>Signup Now</button>
      </form>
      <p>other login options</p>
      <div className="google" onClick={() => googleLogin()}>
      <div className="google-login">
        <div className="google-image">
          <img src={googleLogo} alt="" />
        </div>
        <div className="google-text">
          <p>Login With Google</p>
        </div>
      </div>
      </div>
      <p>Allready have account <b><Link to={'/user-login'}>Login</Link></b> </p>
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

export default UserSignup
