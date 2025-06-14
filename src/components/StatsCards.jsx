
import React from 'react';

const StatsCards = () => {
  return (
    <div className="stats-section">
      <div className="parking-image">
        <img src="/lovable-uploads/0cec989d-cc5c-4bc6-9043-b0e1d2848d88.png" alt="Royal Parking Plaza" />
        <div className="parking-info">
          <h3>Royal Parking Plaza</h3>
          <div className="rating">⭐ 4.3</div>
          <p>80 Wellington St. - Toronto</p>
          <div className="amenities">
            <span>♿</span>
            <span>🚗</span>
            <span>🏢</span>
            <span>🔒</span>
            <span>🏠</span>
          </div>
        </div>
      </div>
      
      <div className="stats-grid">
        <div className="stat-card total">
          <div className="stat-number">124</div>
          <div className="stat-label">Total spaces</div>
        </div>
        <div className="stat-card available">
          <div className="stat-number">89</div>
          <div className="stat-label">Available Spaces</div>
        </div>
        <div className="stat-card busy">
          <div className="stat-number">31</div>
          <div className="stat-label">Busy Spaces</div>
        </div>
        <div className="stat-card late">
          <div className="stat-number">04</div>
          <div className="stat-label">Late Spaces</div>
        </div>
      </div>
      
      <div className="price-info">
        <span>Price per day</span>
        <span className="price">$19</span>
      </div>
    </div>
  );
};

export default StatsCards;
