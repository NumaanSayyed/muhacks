// src/components/SalesChart.jsx

import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

// Register necessary components for Chart.js
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const SalesChart = ({ salesData }) => {
  const data = {
    labels: salesData.map(item => item.product), // X-axis labels
    datasets: [
      {
        label: 'Sales Amount',
        data: salesData.map(item => item.amount), // Sales amounts
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Sales Data Visualization',
      },
    },
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div>
      <h3>Sales Data Visualization</h3>
      <Bar data={data} options={options} />
    </div>
  );
};

export default SalesChart;
