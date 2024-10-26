// src/components/Sale.js
import React, { useEffect, useState } from 'react';
import { dummySalesData } from '../../dummyData';

const Sales = () => {
  const [sales, setSales] = useState([]);

  useEffect(() => {
    // Set sales data using the dummy data
    setSales(dummySalesData);
  }, []);

  return (
    <div>
      <h1>Sales Data</h1>
      <ul>
        {sales.map(sale => (
          <li key={sale.id}>
            {sale.product} - ${sale.amount} on {sale.date}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sales;
