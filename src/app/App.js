import './App.css';
import React from 'react';
import { Link } from 'react-router-dom';

function App() {
  return (
    <div id="app">
      <h1>Welcome to Chat App!</h1>
      <h2>This application was built by: Denise Zitting</h2>
      <p>The primary tools and frameworks behind this application are:
        <ul>
          <li>React</li>
          <li>React Router</li>
          <li>Firebase</li>
        </ul>
        <p>Thanks for checking it out!</p>
      </p>
      <Link to="/login">Click to Login</Link>
    </div>
  );
}

export default App;
