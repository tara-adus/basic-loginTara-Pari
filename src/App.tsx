import React, { useState } from 'react';
import './App.css';

const FloatingCharacters: React.FC = () => {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()'.split('');

  return (
    <div className="floating-characters">
      {characters.map((char, index) => (
        <span
          className="floating-char"
          key={index}
          style={{
            animationDelay: `${Math.random() * 5}s`,
            left: `${Math.random() * 100}vw`,
            top: `${Math.random() * 100}vh`,
            fontSize: `${Math.random() * 3 + 1}rem`, // Random font size
          }}
        >
          {char}
        </span>
      ))}
    </div>
  );
};

const App: React.FC = () => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (name && password) {
      setIsLoggedIn(true);
    }
  };

  return (
    <div className="App">
      {isLoggedIn ? (
        <h1>Welcome, {name}! You have successfully logged in.</h1>
      ) : (
        <form onSubmit={handleSubmit}>
          <h1>Login</h1>
          <div>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit">Enter</button>
        </form>
      )}
      {/* Add floating characters */}
      <FloatingCharacters />
    </div>
  );
};

export default App;
