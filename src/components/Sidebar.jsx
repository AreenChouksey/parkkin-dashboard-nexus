
import React from 'react';

const Sidebar = ({ selectedMenu, setSelectedMenu }) => {
  const menuItems = [
    { id: 'dashboard', icon: '📊', label: 'Dashboard' },
    { id: 'parking-zones', icon: '🅿️', label: 'Parking Zones' },
    { id: 'parking-partners', icon: '🤝', label: 'Parking Partners', active: true },
    { id: 'road-side-partners', icon: '🛣️', label: 'Road Side Partners' },
    { id: 'community', icon: '👥', label: 'Community' },
    { id: 'complaints', icon: '⚠️', label: 'Complaints' },
    { id: 'nearby-places', icon: '📍', label: 'Nearby Places' },
    { id: 'ads', icon: '📢', label: 'Ads' },
    { id: 'police-officers', icon: '👮', label: 'Police Officers' },
    { id: 'vehicles', icon: '🚗', label: 'Vehicles' },
    { id: 'payments', icon: '💳', label: 'Payments' },
    { id: 'wallet', icon: '💰', label: 'Wallet' },
    { id: 'reports', icon: '📊', label: 'Reports' },
    { id: 'vouchers', icon: '🎫', label: 'Vouchers' },
    { id: 'users', icon: '👤', label: 'Users' },
    { id: 'settings', icon: '⚙️', label: 'Settings' }
  ];

  return (
    <div className="sidebar">
      <div className="logo-section">
        <img src="https://www.ewaysservices.com/images/eways.jpg" alt="Eways Services" className="logo" />
        <span className="brand-name">At Parkkin</span>
      </div>
      
      <nav className="nav-menu">
        {menuItems.map((item) => (
          <div 
            key={item.id}
            className={`menu-item ${item.active ? 'active' : ''} ${selectedMenu === item.id ? 'selected' : ''}`}
            onClick={() => setSelectedMenu(item.id)}
          >
            <span className="menu-icon">{item.icon}</span>
            <span className="menu-label">{item.label}</span>
          </div>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;
