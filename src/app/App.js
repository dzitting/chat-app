import "./App.css";
import React from "react";
import { Link } from "react-router-dom";

function App() {
  return (
    <div id="app">
      <h1>Welcome to Chat App</h1>
      <h2>This was created by: Denise Zitting</h2>
      <h3>The tools utilized are:</h3>
      <ul>
        <li>React</li>
        <li>React Router</li>
        <li>Firebase/Firestore</li>
      </ul>
      <h3>Thanks for checking it out!</h3>
      <Link to={"/login"}>Click Here to Login</Link>
    </div>
  );
}

export default App;
