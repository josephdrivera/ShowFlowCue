import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav className="flex justify-between items-center h-16 bg-white text-black relative shadow-sm font-mono" role="navigation">
      <Link to='/' className="pl-8">Show Flow Cue</Link>
      <div className="px-4 cursor-pointer md:hidden">
        {/* Here you can add a burger icon */}
      </div>
      <div className="pr-8 md:block hidden">
        <Link className="p-4" to="/">Home</Link>
        <Link className="p-4" to="/dashboard">Dashboard</Link>
        <Link className="p-4" to="/flow">Flow</Link>
        <Link className="p-4" to="/actions">Actions</Link>
        <Link className="p-4" to="/settings">Settings</Link>
      </div>
    </nav>
  );
};


export default NavBar;