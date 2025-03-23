import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      <h1>Welcome to Habit Tracker</h1>
      <p>Track your habits, stay motivated, and share your journey!</p>
      
      <div className="home-buttons">
        <button onClick={() => navigate('/login')}>Login</button>
        <button onClick={() => navigate('/signup')}>Signup</button>
      </div>
    </div>
  );
}
