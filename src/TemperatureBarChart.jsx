import React from 'react';
import { BarChart, XAxis, YAxis, Tooltip, Legend, Bar, CartesianGrid, ResponsiveContainer } from 'recharts';

function TemperatureBarChart({ data }) {
  return (
    <div>
      <h2>Temperature Bar Chart</h2>
      <ResponsiveContainer width="100%" height={400}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="city_name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="temp" fill="#8884d8" name="Temperature" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default TemperatureBarChart;