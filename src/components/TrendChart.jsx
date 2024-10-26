import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

// Register Chart.js components
ChartJS.register(ArcElement, Tooltip, Legend);

const TrendChart = ({ salesData }) => {
    console.log('Sales Data for Chart:', salesData);

    if (!Array.isArray(salesData) || salesData.length === 0) {
        return <div>Loading...</div>; 
    }

    const data = {
        labels: salesData.map(item => item.product),
        datasets: [
            {
                label: 'Sales',
                data: salesData.map(item => item.sales),
                backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0'],
                borderWidth: 1,
            },
        ],
    };

    const options = {
        responsive: true,
        maintainAspectRatio: false,
    };

    return (
        <div style={{ width: '400px', height: '400px' }}>
            <Doughnut data={data} options={options} />
        </div>
    );
};

export default TrendChart;
