import React, { useState, useEffect } from 'react';

const FoodList = () => {
  const [foods, setFoods] = useState([
    { id: 1, name: 'Pizza', hotel: { name: 'Hotel A' } },
    { id: 2, name: 'Burger', hotel: { name: 'Hotel B' } },
  ]);
  const [search, setSearch] = useState('');

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
        {foods
          .filter(food => food.name.toLowerCase().includes(search.toLowerCase()))
          .map((food) => (
            <li key={food.id}>
              {food.name} - {food.hotel.name}
            </li>
          ))}
      </ul>
    </div>
  );
};

export default FoodList;