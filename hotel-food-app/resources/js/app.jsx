import React from 'react';
import ReactDOM from 'react-dom/client';
import HotelList from './components/HotelList.jsx';
import FoodList from './components/FoodList.jsx';
import Dashboard from './components/Dashboard.jsx';

const root = ReactDOM.createRoot(document.getElementById('app'));
root.render(
  <React.StrictMode>
    <Dashboard />
    <HotelList />
    <FoodList />
  </React.StrictMode>
);