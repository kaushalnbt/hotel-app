import React, { useState, useEffect } from 'react';

const HotelList = () => {
  const [hotels, setHotels] = useState([
    { id: 1, name: 'Hotel A', location: 'Location A' },
    { id: 2, name: 'Hotel B', location: 'Location B' },
  ]);
  const [search, setSearch] = useState('');

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
        {hotels
          .filter(hotel => hotel.name.toLowerCase().includes(search.toLowerCase()))
          .map((hotel) => (
            <li key={hotel.id}>
              {hotel.name} - {hotel.location}
            </li>
          ))}
      </ul>
    </div>
  );
};

export default HotelList;