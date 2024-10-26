// Dashboard.js
import React from 'react';
import { Link } from 'react-router-dom';

function Dashboard() {
  return (
    <div className="max-w-6xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Welcome to Trendy Shop</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="bg-white shadow-lg rounded-lg p-4">
          <h2 className="text-xl font-semibold">Trending Insights</h2>
          <p className="text-gray-700">Explore the latest trends in your area.</p>
          <Link to="/trends" className="mt-4 inline-block bg-blue-500 text-white px-4 py-2 rounded transition duration-300 hover:bg-blue-400">
            View Trends
          </Link>
        </div>
        <div className="bg-white shadow-lg rounded-lg p-4">
          <h2 className="text-xl font-semibold">Latest Products</h2>
          <p className="text-gray-700">Check out the newest arrivals.</p>
          <Link to="/products" className="mt-4 inline-block bg-blue-500 text-white px-4 py-2 rounded transition duration-300 hover:bg-blue-400">
            View Products
          </Link>
        </div>
        <div className="bg-white shadow-lg rounded-lg p-4">
          <h2 className="text-xl font-semibold">Sales Data</h2>
          <p className="text-gray-700">Analyze your sales performance.</p>
          <Link to="/sales" className="mt-4 inline-block bg-blue-500 text-white px-4 py-2 rounded transition duration-300 hover:bg-blue-400">
            View Sales
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
