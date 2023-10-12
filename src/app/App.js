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
        <li>Redux</li>
      </ul>
      <h2>Usage Tips:</h2>
      <p>You can login as a premade user, or sign up with your own information. To use the premade account, simply go to login and use the following credentials:</p>
      <p>Username: <em>jstein@mail.com</em></p>
      <p>Password: <em>123stein</em></p>
      <h3>Thanks for checking it out!</h3>
      <Link to={"/login"}>Click Here to Login</Link>
    </div>
  );
}

export default App;
