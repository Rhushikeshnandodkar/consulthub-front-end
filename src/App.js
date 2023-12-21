import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './components/consultents/Home';
import ConsultentDetail from './components/consultents/ConsultentDetail';
import UserLogin from './components/consultents/UserLogin';
import UserSignup from './components/consultents/UserSignup';
function App() {
  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='product-detail/:id' element={<ConsultentDetail/>}/>
      <Route path='user-login' element={<UserLogin/>}/>
      <Route path='user-signup' element={<UserSignup/>}/>


    </Routes>
  );
}

export default App;
