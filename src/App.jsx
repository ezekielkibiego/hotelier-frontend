import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './components/login';
import Navbar from './components/Navbar';
import About from './components/About';
// import Carousel from './components/Carousel';
import Booking from './components/Booking';
import Hotels from './components/Hotels';
import Restaurants from './components/Restaurants';
import Footer from './components/Footer';
import Home from './components/Home';
import Dashboard from './components/Dashboard';
import Reservations from './components/Reservations';
import Review from './components/Review';
import ContactForm from './components/ContactForm';



function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <Router>
            <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
            {/* <Carousel /> */}
      <Routes>
      <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
      <Route path="/About" element={<About />} />
        <Route path="/Booking" element={<Booking />} />
        <Route path="/Hotels" element={<Hotels />} />
        <Route path="/Restaurants" element={<Restaurants />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Reservations" element={<Reservations />} />
        <Route path="/Review" element={<Review />} />
        <Route path="/contact" element={<ContactForm />} />

        <Route path="/dashboard/*" element={<Dashboard />} />
        <Route path="/" element={<Navigate to="/login" />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
