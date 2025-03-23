import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles.css';

const Signup = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = (e) => {
    e.preventDefault();
    if (email === '' || password === '') {
      alert('Please fill all fields!');
      return;
    }
    console.log('User Signed Up:', { email, password });
    navigate('/todo');
  };

  return (
    <div className="signup-page">
      <div className="auth-container">
        <h2>Create Account</h2>
        <form onSubmit={handleSignup}>
          <input
            type="email"
            placeholder="Enter Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Create Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit">Sign Up</button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
