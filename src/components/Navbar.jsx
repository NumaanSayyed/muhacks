// src/components/Navbar.jsx
import React from 'react';
import { SignedIn, SignedOut } from "@clerk/clerk-react";
import RedirectButton from "./RedirectButton";

const Navbar = () => {
  return (
    <nav className="bg-gray-800 text-white p-4 flex justify-between items-center">
      <h1 className="text-xl font-bold">MyApp</h1>
      <div className="flex space-x-4">
        <SignedIn>
          <RedirectButton>Dashboard</RedirectButton>
          <RedirectButton>Sales</RedirectButton>
          <RedirectButton>Profile</RedirectButton>
          <RedirectButton>Settings</RedirectButton>
        </SignedIn>
        <SignedOut>
          <RedirectButton>Dashboard</RedirectButton>
          <RedirectButton>Sales</RedirectButton>
        </SignedOut>
      </div>
    </nav>
  );
};

export default Navbar;
