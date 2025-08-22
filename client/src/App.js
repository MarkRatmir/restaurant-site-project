import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home.js';
import Menu from './pages/Menu.js';
import Reservation from './pages/Reservation.js';
import Navbar from './components/Navbar.jsx';
import ThankYou from './pages/ThankYou.js';
import ScrollToTop from './components/ScrollToTop.jsx';
import Footer from './components/Footer.jsx';
import Admin from './pages/Admin.js';
import AdminLogin from './pages/AdminLogin.js';
import { useState } from 'react';


function App() {

  const [isAdminLoggedIn, setIsAdminLoggedIn] = useState(false);
  return (
    <Router>
      <ScrollToTop/>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/menu" element={<Menu />}/>
        <Route path="/reservation" element={<Reservation />}/>
        <Route path="/reservation-success" element={<ThankYou />}/>
        <Route 
          path="/admin-login" 
          element={<AdminLogin onLogin={() => setIsAdminLoggedIn(true)} />}
        />
        <Route 
          path="/admin" 
          element={isAdminLoggedIn ? <Admin /> : <AdminLogin onLogin={() => setIsAdminLoggedIn(true)} />}
        />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;