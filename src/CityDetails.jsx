import React from 'react';
import { useParams } from 'react-router-dom';

function CityDetails({ cities }) {
  const { cityName } = useParams();

  // Find the city data by cityName from the cities array
  const city = cities.find((c) => c.city_name === cityName);

  return (
    <div>
      <h2>{cityName} Details</h2>
      {city && (
        <div>
          <p>City: {city.city_name}</p>
          <p>Temperature: {city.temp}</p>
        </div>
      )}
    </div>
  );
}

export default CityDetails;