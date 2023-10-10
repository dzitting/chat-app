import React from "react";
import { Link, Form } from "react-router-dom";

export default function LoginPage({
  handleSubmit,
  handleChange,
  handleChangePass,
  error,
  email,
  password,
}) {
  return (
    <div id="login">
      {error && (
        <div>
          <p>Incorrect email or password</p>
          <Link to="/signup">
            <button>Sign Up</button>
          </Link>
        </div>
      )}
      <h1>Login</h1>
      <Form onSubmit={handleSubmit}>
        <label>Email</label>
        <input
          onChange={(e) => handleChange(e)}
          type="email"
          name="email"
          value={email}
        />
        <label>Password</label>
        <input
          onChange={(e) => handleChangePass(e)}
          type="password"
          name="password"
          value={password}
        />
        <div id="buttons">
          <button type="submit" value="Login">
            Login
          </button>
          <Link to="/signup">Sign Up</Link>
        </div>
      </Form>
    </div>
  );
}
