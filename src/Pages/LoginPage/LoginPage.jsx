import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './LoginPage.css'; // Optional CSS file for styling

function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const history = useHistory();

  // Hardcoded credentials for simplicity
  const validUsername = 'user';
  const validPassword = 'password123';

  const handleLogin = (event) => {
    event.preventDefault();

    // Check if the user’s input matches the hardcoded credentials
    if (username === validUsername && password === validPassword) {
      // Simulate successful login using localStorage
      localStorage.setItem('isAuthenticated', 'true');
      history.push('/'); // Redirect the user to the home page
    } else {
      setError('Invalid username or password');
    }
  };

  return (
    <div className="login-page">
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <div>
          <label>Username:</label>
          <input
            type="text"
            required
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        
        <div>
          <label>Password:</label>
          <input
            type="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button type="submit">Log In</button>

        {error && <p className="error">{error}</p>}
      </form>
    </div>
  );
}

export default LoginPage;
