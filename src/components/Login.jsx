import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const navigate = useNavigate();  // ✅ Correct usage
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();  // ✅ Stops page refresh

    // Dummy authentication
    if (email === 'test@gmail.com' && password === '1234') {
      alert('Login Successful ✅');
      navigate('/todo');  // ✅ Redirects properly
    } else {
      alert('Invalid Credentials ❌');
    }
  };

  return (
    <div className="login-container">
      <h2>Login to Habit Tracker</h2>
      <form onSubmit={handleSubmit}>
        <input 
          type="email" 
          placeholder="Email" 
          value={email}
          onChange={(e) => setEmail(e.target.value)} 
          required 
        />
        <input 
          type="password" 
          placeholder="Password" 
          value={password}
          onChange={(e) => setPassword(e.target.value)} 
          required 
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}
