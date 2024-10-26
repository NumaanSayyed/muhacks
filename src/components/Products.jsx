// Products.js
import React from 'react';

function Products() {
  return (
    <div className="max-w-6xl mx-auto p-4">
      <h2 className="text-3xl font-bold mb-6">Latest Products</h2>
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {/* Sample Product Card */}
        <li className="bg-white shadow-lg rounded-lg p-4">
          <h3 className="font-semibold text-lg">Product Name</h3>
          <p className="text-gray-700">Product description goes here.</p>
          <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded transition duration-300 hover:bg-blue-400">
            Add to Cart
          </button>
        </li>
      </ul>
    </div>
  );
}

export default Products;
