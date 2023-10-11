import React from "react";
import { Form, Link } from "react-router-dom";

export default function SignUpPage({handleSignUp}) {
  return (
    <div className="signup-container__wrapper">
      <div className="signup-container">
        <h1>Sign Up</h1>
        <span>Welcome</span>
        <Form onSubmit={(e) => handleSignUp(e)}>
          <input type="text" placeholder="Username" />
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <input type="file" />
          <button>Sign Up</button>
        </Form>
        <div className="login-container--signup">
          <p>Already have an account?</p>
          <Link to="/login">Login</Link>
        </div>
      </div>
    </div>
  );
}
