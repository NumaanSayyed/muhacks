// services/api.js
import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5000/api',
});

// Fetch trends
export const getTrends = () => api.get('/trends');

// Fetch sales data (add more API methods as needed)
export const getSalesData = () => api.get('/sales');

// Additional methods can be added here
