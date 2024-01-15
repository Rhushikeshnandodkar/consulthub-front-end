import React, { useState } from 'react'
import Navbar from '../molecules/Navbar'
import { CreateUserProfileStyle } from './consultents.style'
import { useDispatch, useSelector } from 'react-redux';
import { eventWrapper } from '@testing-library/user-event/dist/utils';
import { createProfile, getInterests } from '../../features/userAuth/userSlice';
import { useNavigate } from 'react-router-dom';
function EditUserProfile() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const {interests, user, userToken} = useSelector((state) => ({
    ...state.user
  }))
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [isInputFocused, setIsInputFocused] = useState(false);
  const [userInfo, setUserInfo] = useState({first_name: user.first_name, last_name: user.last_name, phone_number: user.phone_number, interests:user.interests})
  const onChange = (e) =>{
    const {name, value} = e.target 
    setUserInfo({...userInfo, [name]: value})
  }
  const handleFocus = () => {
    setIsInputFocused(true);
  };

  const handleBlur = () => {
    setIsInputFocused(false);
  };
  const handleClick = (option, id) =>{
    if(!userInfo.interests.find(item => item.interest == option)){
      const updatedInterest = [...userInfo.interests, {id: id, interest: option}]
      setUserInfo({...userInfo, interests: updatedInterest})
      handleBlur()
    }
  }
  const handleRemoveOption = (id) => {
    // Remove the option from the selectedOptions array based on its id
    const removableOption = userInfo.interests.filter(item => item.id != id);
    console.log(removableOption)
    setUserInfo({...userInfo, interests: removableOption});
  };
  const giveSuggetions = (e) =>{
    if(e.target.value == ''){
      setIsInputFocused(false)
    }
    else{
      setIsInputFocused(true)
    }
    dispatch(getInterests(e.target.value))
  }
  const handleSubmit = (e) =>{
    e.preventDefault()
    const {first_name, last_name, phone_number, interests} = userInfo
    dispatch(createProfile({first_name, last_name, phone_number, interests}))
    return navigate('/your-profile')
  }
  if(!user&& !userToken){
    return navigate('/user-login')
  }

  console.log(userInfo)
  return (
    <div>
      <Navbar/>
      <CreateUserProfileStyle>
        <div className="heading">
          <h1>Create Your Profile</h1>
        </div>
        <div className="form-section">
          <form action="" onSubmit={handleSubmit}>
            <div className="first-line">
              <input type="text" placeholder='Enter Your First Name' name="first_name" value={userInfo.first_name} onChange={onChange}/>
              <input type="text" placeholder='Enter Your Last Name' name="last_name" value={userInfo.last_name} onChange={onChange}/>
            </div>
            <div className="form-text">
              <h4>Please Enter Your Phone Number</h4>
              <p>Enter your phone number so that we can connect with you and make meeting between you and consultent you are looking for</p>
            </div>
            <input type="text" placeholder='Enter Your Phone Number' name="phone_number" value={userInfo.phone_number} onChange={onChange}/>
            <div className="form-text">
              <h4>Please Enter Your Phone Number</h4>
              <p>Enter your phone number so that we can connect with you and make meeting between you and consultent you are looking for</p>
            </div>
           <div className="interests-section">
            <div className="interests">
              <div className="selected-options">
                {userInfo.interests.map((val) => (
              <div className='button'>
                  <h4>{val.interest}</h4>
                  <svg onClick={() => {handleRemoveOption(val.id)}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 21 21"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m15.5 15.5l-10-10zm0-10l-10 10"/></svg>
              </div>
                ))}
                </div>
              <input onFocus={handleFocus} onChange={giveSuggetions} type="text" placeholder='Enter Your Interest'/>
              <div className={`suggetions ${isInputFocused ? 'active' : ''}`}>
                <ul>
                {interests && interests.map((val) =>(
                  <li onClick={() => {handleClick(val.interest, val.id)}}>{val.interest}</li>
                ))}
                </ul>
              </div>
            </div>
           </div>
           <button className="btn">Save Now</button>
          </form>
        </div>
      </CreateUserProfileStyle>
    </div>
  )
}

export default EditUserProfile
