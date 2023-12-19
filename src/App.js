import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './components/consultents/Home';
import ConsultentDetail from './components/consultents/ConsultentDetail';
import UserLogin from './components/consultents/UserLogin';
function App() {
  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='product-detail/:id' element={<ConsultentDetail/>}/>
      <Route path='user-login' element={<UserLogin/>}/>

    </Routes>
  );
}

export default App;
