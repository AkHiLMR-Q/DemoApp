import { Route, Routes, useNavigate } from 'react-router-dom';
import './App.css';
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Home from './Components/Home';
import View from './Components/View';
import Auth from './Components/Auth';
import { useEffect, useState } from 'react';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false); 
  useEffect(() => {
    const loggedIn = localStorage.getItem('isLoggedIn');
    setIsLoggedIn(loggedIn === 'true'); 
  }, []);

  const handleLogin = () => {
    setIsLoggedIn(true); 
    localStorage.setItem('isLoggedIn', 'true'); 
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    localStorage.removeItem('isLoggedIn'); 
  };

  return (
    <>
      <Header isLoggedIn={isLoggedIn} handleLogout={handleLogout} />
      <Routes>
        <Route path='/home' element={<Home />} />
        <Route path='/view/:id' element={<View />} />
        <Route path="/" element={<Auth handleLogin={handleLogin} />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;



