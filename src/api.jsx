const API_KEY = '958316e074f749c1973722ec2b371282';
const BASE_URL = 'https://api.weatherbit.io/v2.0/current';

// Fetch weather data from the Weatherbit API
export const fetchWeatherData = async (city) => {
  const url = `${BASE_URL}?city=${city}&key=${API_KEY}`;
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
};