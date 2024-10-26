// pages/Trends.jsx
import React, { useEffect, useState } from 'react';
import { getTrends } from '../services/api';

function Trends() {
  const [trends, setTrends] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getTrends()
      .then(res => {
        setTrends(res.data);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  if (loading) return <div className="text-center mt-10">Loading...</div>;

  return (
    <div className="max-w-6xl mx-auto p-4">
      <h2 className="text-3xl font-bold mb-6">Trending Products Around Your Location</h2>
      <div className="bg-white shadow-lg rounded-lg p-4">
        <ul>
          {trends.map((trend, index) => (
            <li key={index} className="p-2 border-b">
              <strong>{trend.location}:</strong> {trend.trend_data}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Trends;
