// src/components/DashboardLayout.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import "../styles/DashboardLayout.css";

const DashboardLayout = ({ children }) => {
  return (
    <div className="dashboard-container">
      <aside className="sidebar">
        <h2>Admin Dashboard</h2>
        <ul>
          <li><Link to="/dashboard/users">Users</Link></li>
          <li><Link to="/dashboard/hotels">Hotels</Link></li>
          <li><Link to="/dashboard/restaurant">Restaurants</Link></li>
          <li><Link to="/dashboard/reservations">Reservations</Link></li>
          <li><Link to="/dashboard/bookings">Bookings</Link></li>
          <li><Link to="/dashboard/contact">Messages</Link></li>


        </ul>
      </aside>
      <main className="main-content">
        {children}
      </main>
    </div>
  );
};

export default DashboardLayout;

