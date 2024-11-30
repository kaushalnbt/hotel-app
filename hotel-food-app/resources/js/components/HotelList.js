import React, { useState, useEffect } from 'react';
import { getHotels } from '../services/api';

const HotelList = () => {
  const [hotels, setHotels] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    const fetchHotels = async () => {
      try {
        const response = await getHotels(search);
        setHotels(response.data.data);
      } catch (error) {
        console.error('Error fetching hotels:', error);
      }
    };

    fetchHotels();
  }, [search]);

  return (
    <div>
      <h2>Hotel List</h2>
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search hotels..."
      />
      <ul>
        {hotels.map((hotel) => (
          <li key={hotel.id}>
            {hotel.name} - {hotel.location}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HotelList;