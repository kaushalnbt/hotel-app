import React, { useState, useEffect } from 'react';

const Dashboard = () => {
  const [dashboardData, setDashboardData] = useState(null);

  useEffect(() => {
    // Fetch data here (for now, we'll use dummy data)
    setDashboardData({
      totalHotels: 50,
      totalFoods: 200,
      monthlyData: [
        { month: 'January', year: 2024, total: 25 },
        { month: 'February', year: 2024, total: 40 },
      ],
    });
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