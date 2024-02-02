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
function App() {
  const dispatch = useDispatch()
  useEffect(() =>{
    dispatch(checkAuth())
  }, [])
  return (
    <Routes>
      <Route path='/' element={<LandingPage/>}/>
      <Route path='/consultents' element={<Home/>}/>

      <Route path='product-detail/:id' element={<ConsultentDetail/>}/>
      <Route path='user-login' element={<UserLogin/>}/>
      <Route path='user-signup' element={<UserSignup/>}/>
      <Route path='thank-you' element={<BookingThanks/>}/>
      <Route path='create-profile' element={<EditUserProfile/>}/>
      <Route path='your-profile' element={<UserProfile/>}/>
      <Route path='about' element={<About/>}/>
      <Route path='contact' element={<Contact/>}/>
      <Route path='community' element={<Community/>}/>

    </Routes>
  );
}

export default App;
