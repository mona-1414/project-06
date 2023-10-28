import React, { useState, useEffect } from 'react';
import './App.css';
import TemperatureList from './TemperatureList';
import TemperatureBarChart from './TemperatureBarChart';
//import { fetchWeatherData } from './api';

function App() {
  const [cities, setCities] = useState([]);
  const barChartData = [
    { city_name: 'Los Angeles', temp: 16.1 },
    { city_name: 'Salt Lake City', temp: 6.3 },
    { city_name: 'Paris', temp: 11.7 },
    { city_name: 'Cairo', temp: 21.3 },
    { city_name: 'Berlin', temp: 8.9 },
  ];

  useEffect(() => {
    const citiesToFetch = [
      'New York', 'Los Angeles', 'Salt Lake City', 'Chicago', 'Paris',
      'London', 'Cairo', 'Istanbul', 'Berlin', 'Madrid',
    ];

    async function fetchData() {
      const dataPromises = citiesToFetch.map(async (cityName) => {
        try {
          const data = await fetchWeatherData(cityName);
          return data.data[0];
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
    <div className="App">
      <header className="App-header">
        <h1>Weather Dashboard</h1>
        <TemperatureList/>
        <TemperatureBarChart data={barChartData} />
      </header>
    </div>
  );
}

export default App;
