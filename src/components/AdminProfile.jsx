
import React from 'react';

const AdminProfile = () => {
  return (
    <div className="admin-profile">
      <div className="admin-header">
        <span>Admin user</span>
        <button className="edit-btn">✏️</button>
      </div>
      
      <div className="admin-details">
        <div className="admin-avatar">
          <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=50&h=50&fit=crop&crop=face" alt="Admin" />
        </div>
        <div className="admin-info">
          <h4>Mike hales</h4>
          <p>Mike.hales@example.com</p>
        </div>
      </div>
    </div>
  );
};

export default AdminProfile;
