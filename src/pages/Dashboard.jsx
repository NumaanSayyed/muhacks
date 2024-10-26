// pages/Dashboard.jsx
import React from 'react';
import { Link } from 'react-router-dom';

function Dashboard() {
  return (
    <div className="max-w-6xl mx-auto p-4">
      <h1 className="text-4xl font-bold mb-6">Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-blue-500 text-white rounded-lg p-6 shadow-lg">
          <h2 className="text-2xl mb-2">Sales Overview</h2>
          <p className="text-xl">Total Sales: $X,XXX</p>
          <Link to="/sales" className="text-blue-200 hover:text-white">View Details</Link>
        </div>
        <div className="bg-green-500 text-white rounded-lg p-6 shadow-lg">
          <h2 className="text-2xl mb-2">Trending Products</h2>
          <p className="text-xl">See what's popular!</p>
          <Link to="/trends" className="text-green-200 hover:text-white">View Trends</Link>
        </div>
        <div className="bg-yellow-500 text-white rounded-lg p-6 shadow-lg">
          <h2 className="text-2xl mb-2">Manage Products</h2>
          <p className="text-xl">Add/Edit Products</p>
          <Link to="/products" className="text-yellow-200 hover:text-white">Manage Products</Link>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
