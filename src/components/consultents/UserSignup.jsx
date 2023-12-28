import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Navigate, useNavigate } from 'react-router-dom'
import { userLogin, userSignup } from '../../features/userAuth/userSlice'
import imageUrl from "../../images/login.png"
import googleLogo from "../../images/google-logo.png"
import { LoginPageStyle } from './consultents.style'
import { Link } from 'react-router-dom'
import Navbar from '../molecules/Navbar'
function UserSignup() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const {user, userToken} = useSelector((state) => ({
    ...state.user
  }))
  const[formData, setFormData] = useState({
    username : "",
    email : "",
    password : "",
    password_again : "",
    phone_number : ""
  })
  const onChange = (e) =>{
    const {name, value} = e.target 
    setFormData({...formData, [name]: value})
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    // dispatch(formData)
    console.log("submitted")
    const {username, phone_number, email, password, password_again} = formData
    dispatch(userSignup({username,phone_number, email, password, password_again}))
  }

  if(user && userToken){
    return navigate("/")
  }
  return (
    <div>
      <Navbar/>
      <LoginPageStyle>
      <div className="login-page">
      <div className="form-section">
        <h2>Signup To Connect</h2>
        <h4>Signup here to connect our best consultents</h4>
        <h3><b>Best of Luck</b></h3>
      <form action="" onSubmit={handleSubmit}>
        <input type="text" id='username' placeholder='Enter Your Username' name='username' value={formData.username} onChange={onChange}/>
        <input type="text" id='phone_number' placeholder='Enter Your Phone Number' name='phone_number' value={formData.phone_number} onChange={onChange}/>
        <input type="email" id='email' name="email" placeholder='Enter Your Email' value={formData.email} onChange={onChange}/>
        <input type="password" id='password' name="password" placeholder='Enter Your Password' value={formData.password} onChange={onChange}/>
        <input type="password" id='password_again' name="password_again" placeholder='Enter Your Password Again' value={formData.password_again} onChange={onChange}/>
        <button type='submit'>Signup Now</button>
      </form>
      <p>other login options</p>
      <div className="google">
      <div className="google-login">
        <div className="google-image">
          <img src={googleLogo} alt="" />
        </div>
        <div className="google-text">
          <p>Login With Google</p>
        </div>
      </div>
      </div>
      <p>don't have account <b><Link to={'/user-login'}>Login</Link></b> </p>
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
