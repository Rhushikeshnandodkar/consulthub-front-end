import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Navigate, useNavigate, useLocation } from 'react-router-dom'
import { userLogin } from '../../features/userAuth/userSlice'
import imageUrl from "../../images/login.png"
import googleLogo from "../../images/google-logo.png"
import { Link } from 'react-router-dom'
import { LoginPageStyle } from './consultents.style'
import Navbar from '../molecules/Navbar'
import { useGoogleLogin } from '@react-oauth/google'
import { googleUserLogin } from '../../features/userAuth/userSlice'

function UserLogin() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const {user, userToken, status} = useSelector((state) => ({
    ...state.user
  }))
  const googleLogin = useGoogleLogin({
    onSuccess : (codeResponse) => SendToken(codeResponse),
    onError : (error) => console.log(error)
  })
  const SendToken = async (tokenInfo) => {
    console.log(tokenInfo.access_token)
    dispatch(googleUserLogin(tokenInfo.access_token))
    return navigate(-1)
  }
  const [isactive, setIsactive] = useState(false)
  const[formData, setFormData] = useState({
    email : "",
    password : ""
  })
  const onChange = (e) =>{
    const {name, value} = e.target 
    setFormData({...formData, [name]: value})
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    const {email, password} = formData
    dispatch(userLogin({email, password})) 
  }
  
    if(user&& userToken){
      return navigate("/consultents")
    }
  

  return (
    <div>
  <Navbar/>
      <LoginPageStyle>
      <div className="login-page">
      <div className="form-section">
        {status==401 ? <><div className="alert"><h6>Please Enter Valid Details</h6></div></> : <></>}
        <h2>Login To Connect</h2>
        <h4>Login here to connect our best consultents</h4>
        <h3><b>Best of Luck</b></h3>
      <form action="" onSubmit={handleSubmit}>
        <input type="text" id='username' placeholder='Enter Your Email' name='email' value={formData.email} onChange={onChange}/>
        <input type="password" id='password' name="password" placeholder='Enter Your Password' value={formData.password} onChange={onChange}/>
        <button type='submit'>Login Now</button>
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
      <p>don't have account <b><Link to={'/user-signup'}>Signup</Link></b></p>
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

export default UserLogin
