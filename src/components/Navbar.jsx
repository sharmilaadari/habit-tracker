import React from 'react';
import { Link } from 'react-router-dom';
import '../styles.css';

const Navbar = () => {
  return (
    <div className="sidebar">
      <h2>Habit Tracker</h2>
      <nav>
        <Link to="/">Home</Link>
        {/* Removed Signup from here */}
        <Link to="/todo">To-Do</Link>
        <Link to="/social">Social</Link>
        <Link to="/broadcast">Broadcast</Link>
        <Link to="/animation">Animation</Link>
        <Link to="/activity">Activity</Link>
        {/* Use this as logout button */}
      </nav>
    </div>
  );
};

export default Navbar;
