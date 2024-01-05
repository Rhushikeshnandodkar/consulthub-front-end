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
function App() {
  const dispatch = useDispatch()
  useEffect(() =>{
    dispatch(checkAuth())
  }, [])
  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='product-detail/:id' element={<ConsultentDetail/>}/>
      <Route path='user-login' element={<UserLogin/>}/>
      <Route path='user-signup' element={<UserSignup/>}/>
      <Route path='thank-you' element={<BookingThanks/>}/>
      <Route path='create-profile' element={<EditUserProfile/>}/>
      <Route path='your-profile' element={<UserProfile/>}/>
    </Routes>
  );
}

export default App;
