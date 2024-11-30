import React from 'react';
import ReactDOM from 'react-dom/client';
import HotelList from './components/HotelList';
import FoodList from './components/FoodList';
import Dashboard from './components/Dashboard';

const root = ReactDOM.createRoot(document.getElementById('app'));
root.render(
  <React.StrictMode>
    <Dashboard />
    <HotelList />
    <FoodList />
  </React.StrictMode>
);