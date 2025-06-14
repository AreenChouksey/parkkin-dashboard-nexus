
import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import ParkingSpaces from '../components/ParkingSpaces';
import StatsCards from '../components/StatsCards';
import AdminProfile from '../components/AdminProfile';
import './Dashboard.css';

const Index = () => {
  const [selectedMenu, setSelectedMenu] = useState('dashboard');

  return (
    <div className="dashboard">
      <Sidebar selectedMenu={selectedMenu} setSelectedMenu={setSelectedMenu} />
      <div className="main-content">
        <Header />
        <div className="content-area">
          <div className="left-section">
            <div className="breadcrumb">
              Parking Partners / Royal Parking Plaza
            </div>
            <div className="tabs">
              <button className="tab active">Spaces</button>
              <button className="tab">History</button>
              <button className="tab">Payments</button>
              <button className="tab">Spot Profile</button>
              <button className="tab">Reviews</button>
            </div>
            <ParkingSpaces />
          </div>
          <div className="right-section">
            <StatsCards />
            <AdminProfile />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
