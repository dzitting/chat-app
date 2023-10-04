import React from "react";
import { Link } from "react-router-dom";

export default function LoginPage({
  handleSubmit,
  handleChange,
  handleChangePass,
  error,
  email,
  password,
}) {
  return (
    <div>
      {error && (
        <div>
          <p>Incorrect email or password</p>
          <Link to="/signup">
            <button>Sign Up</button>
          </Link>
        </div>
      )}
      Login
      <form onSubmit={handleSubmit}>
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
        <input type="submit" value="Login" />
        <Link to="/signup">
          <button>Sign Up</button>
        </Link>
      </form>
    </div>
  );
}