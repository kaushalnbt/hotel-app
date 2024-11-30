import React, { useState, useEffect } from 'react';
import { getDashboardData } from '../services/api';

const Dashboard = () => {
  const [dashboardData, setDashboardData] = useState(null);

  useEffect(() => {
    const fetchDashboardData = async () => {
      try {
        const response = await getDashboardData();
        setDashboardData(response.data.data);
      } catch (error) {
        console.error('Error fetching dashboard data:', error);
      }
    };

    fetchDashboardData();
  }, []);

  if (!dashboardData) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>Dashboard</h2>
      <p>Total Hotels: {dashboardData.totalHotels}</p>
      <p>Total Foods: {dashboardData.totalFoods}</p>
      <h3>Monthly Food Data</h3>
      <ul>
        {dashboardData.monthlyData.map((item, index) => (
          <li key={index}>
            {item.month}/{item.year}: {item.total} foods
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dashboard;