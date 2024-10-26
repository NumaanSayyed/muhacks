// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Dashboard from './components/Dashboard';
import Trends from './components/Trends';
import Sales from './components/Sales';
import Products from './components/Products';
import ProtectedRoute from './components/ProtectedRoute';
import SignInPage from './components/SignInPage'; // Importing SignInPage

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/trends"
          element={
            <ProtectedRoute>
              <Trends />
            </ProtectedRoute>
          }
        />
        <Route
          path="/sales"
          element={
            <ProtectedRoute>
              <Sales />
            </ProtectedRoute>
          }
        />
        <Route path="/products" element={<Products />} />
        <Route path="/sign-in" element={<SignInPage />} /> {/* Route for Sign In */}
      </Routes>
    </Router>
  );
}

export default App;
