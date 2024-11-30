import React from 'react';
import ReactDOM from 'react-dom';
import Dashboard from './components/Dashboard';
import HotelList from './components/HotelList';
import FoodList from './components/FoodList';

const App = () => {
  return (
    <div>
      {/* Navbar */}
      <nav style={navStyle}>
        <ul style={navListStyle}>
          <li style={navItemStyle}><a href="#dashboard" style={navLinkStyle}>Dashboard</a></li>
          <li style={navItemStyle}><a href="#hotels" style={navLinkStyle}>Hotels</a></li>
          <li style={navItemStyle}><a href="#foods" style={navLinkStyle}>Foods</a></li>
        </ul>
      </nav>

      {/* Main content */}
      <div style={mainContentStyle}>
        <Dashboard />
        <HotelList />
        <FoodList />
      </div>
    </div>
  );
};

// Styles
const navStyle = { backgroundColor: '#2c3e50', padding: '10px 20px' };
const navListStyle = { listStyleType: 'none', display: 'flex', margin: 0, padding: 0 };
const navItemStyle = { marginRight: '20px' };
const navLinkStyle = { color: 'white', textDecoration: 'none' };
const mainContentStyle = { marginTop: '20px', padding: '20px' };

export default App;