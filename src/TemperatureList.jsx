import React, { useState, useEffect } from 'react';
import { fetchWeatherData } from './api'; // Import your API function

function TemperatureList() {
  const [cities, setCities] = useState([]); // Initialize an empty array to store the city data

  useEffect(() => {
    // Array of city names you want to fetch data for
    const citiesToFetch = [
      'New York', 'Los Angeles', 'Salt Lake City', 'Chicago', 'Paris',
      'London', 'Cairo', 'Istanbul', 'Berlin', 'Madrid',
    ];

    // Fetch data for each city
    async function fetchData() {
      const dataPromises = citiesToFetch.map(async (cityName) => {
        try {
          const data = await fetchWeatherData(cityName);
          return data.data[0]; // Assuming you want the first data point for each city
        } catch (error) {
          console.error(`Error fetching data for ${cityName}:`, error);
          return null;
        }
      });

      const cityData = await Promise.all(dataPromises);
      setCities(cityData.filter(city => city !== null));
    }

    fetchData();
  }, []);

  return (
    <div>
      <h2>Temperature List</h2>
      <ul>
        {cities.map((city, index) => (
          <li key={index}>
            City: {city.city_name}, Temperature: {city.temp}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TemperatureList;
