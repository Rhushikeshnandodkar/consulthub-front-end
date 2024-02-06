import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './components/consultents/Home';
import ConsultentDetail from './components/consultents/ConsultentDetail';
import UserLogin from './components/consultents/UserLogin';
import UserSignup from './components/consultents/UserSignup';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { checkAuth } from './features/userAuth/userSlice';
import Thanks from './components/molecules/Thanks';
import BookingThanks from './components/molecules/BookingThanks';
import EditUserProfile from './components/consultents/EditUserProfile';
import UserProfile from './components/consultents/UserProfile';
import LandingPage from './components/common/LandingPage';
import About from './components/common/About';
import Contact from './components/common/Contact';
import Community from './components/common/Community';
import Notfound from './components/common/Notfound';
function App() {
  const dispatch = useDispatch()
  useEffect(() =>{
    dispatch(checkAuth())
  }, [])
  return (
    <Routes>
      <Route exact path='/' element={<LandingPage/>}/>
      <Route exact path='/consultents' element={<Home/>}/>
      <Route exact path='product-detail/:id' element={<ConsultentDetail/>}/>
      <Route exact path='user-login' element={<UserLogin/>}/>
      <Route exact path='user-signup' element={<UserSignup/>}/>
      <Route exact path='thank-you' element={<BookingThanks/>}/>
      <Route exact path='create-profile' element={<EditUserProfile/>}/>
      <Route exact path='your-profile' element={<UserProfile/>}/>
      <Route exact path='about' element={<About/>}/>
      <Route exact path='contact' element={<Contact/>}/>
      <Route exact path='community' element={<Community/>}/>
      <Route path="*" element={<Notfound />}/>

    </Routes>
  );
}

export default App;
