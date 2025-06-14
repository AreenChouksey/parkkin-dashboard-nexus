
import React from 'react';

const Header = () => {
  return (
    <div className="header">
      <div className="header-left">
        <div className="search-container">
          <input 
            type="text" 
            placeholder="Search..." 
            className="search-input"
          />
          <span className="search-icon">🔍</span>
        </div>
        <select className="filter-dropdown">
          <option>All spaces</option>
          <option>Available</option>
          <option>Occupied</option>
          <option>Reserved</option>
        </select>
      </div>
      
      <div className="header-right">
        <button className="active-btn">Active</button>
        <button className="edit-profile-btn">✏️ Edit Profile</button>
        <div className="admin-info">
          <span className="admin-label">Admin</span>
        </div>
      </div>
    </div>
  );
};

export default Header;
