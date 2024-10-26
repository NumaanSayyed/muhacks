// Trends.jsx
import React from 'react';
import TrendChart from './TrendChart';
import Sales from './Sales'; // Import the Sales component

const Trends = () => {
    return (
        <div style={{ padding: '20px' }}>
            <h1 style={{ textAlign: 'center' }}>Sales Trends Overview</h1>
            <Sales /> {/* Render the Sales component here */}
        </div>
    );
};

export default Trends;
