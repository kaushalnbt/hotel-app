import React, { useState, useEffect } from 'react';
import { getFoods } from '../services/api';

const FoodList = () => {
  const [foods, setFoods] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    const fetchFoods = async () => {
      try {
        const response = await getFoods(search);
        setFoods(response.data.data);
      } catch (error) {
        console.error('Error fetching foods:', error);
      }
    };

    fetchFoods();
  }, [search]);

  return (
    <div>
      <h2>Food List</h2>
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search foods..."
      />
      <ul>
        {foods.map((food) => (
          <li key={food.id}>
            {food.name} - {food.hotel.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FoodList;