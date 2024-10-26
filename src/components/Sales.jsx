import React, { useEffect, useState } from 'react';
import TrendChart from './TrendChart';

const Sales = () => {
  const [salesData, setSalesData] = useState([]);

  const dummySalesData = [
    { product: 'Product A', sales: 45 },
    { product: 'Product B', sales: 30 },
    { product: 'Product C', sales: 15 },
    { product: 'Product D', sales: 10 },
  ];

  useEffect(() => {
    const fetchData = async () => {
      setTimeout(() => {
        setSalesData(dummySalesData);
      }, 1000);
    };

    fetchData();
  }, []);

  return (
    <div className="p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">Sales Data Overview</h2>
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between">
        <div className="flex-1 mb-4 md:mb-0 md:mr-4">
          <TrendChart salesData={salesData} />
        </div>
        <div className="flex-1">
          <h3 className="text-xl font-semibold mb-2 text-gray-700">Sales Details</h3>
          <ul className="bg-gray-100 p-4 rounded-lg shadow">
            {salesData.map((item, index) => (
              <li key={index} className="py-2 border-b last:border-b-0 border-gray-300 text-gray-600">
                <span className="font-medium">{item.product}</span>: <span>{item.sales} units sold</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sales;
