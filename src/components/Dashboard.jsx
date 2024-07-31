// src/components/Dashboard.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import DashboardLayout from './DashboardLayout';
import UserList from './UserList';
import HotelList from './HotelList';
import RestaurantList from './RestaurantList';
import ReservationtList from './ReservationList';
import BookingList from './BookingList';
import ContactFormList from './ContactFormList';


const Dashboard = () => {
  return (
    <DashboardLayout>
      <Routes>
        <Route path="users" element={<UserList />} />
        <Route path="hotels" element={<HotelList />} />
        <Route path="restaurant" element={<RestaurantList />} />
        <Route path="reservations" element={<ReservationtList />} />
        <Route path="bookings" element={<BookingList/>} />
        <Route path="contact" element={<ContactFormList/>} />

      </Routes>
    </DashboardLayout>
  );
};

export default Dashboard;
