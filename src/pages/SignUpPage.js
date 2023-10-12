import React from "react";
import { Form, Link } from "react-router-dom";

export default function SignUpPage({ handleSignUp }) {
  return (
    <div className="signup-container__wrapper">
      <div className="signup-container">
        <h1>Sign Up</h1>
        <span>Welcome</span>
        <Form onSubmit={(e) => handleSignUp(e)}>
          <input type="text" placeholder="Username" required />
          <input type="email" placeholder="Email" required />
          <input type="password" placeholder="Password" required />
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <input id="file" type="file" style={{ display: "none" }} />
            <label
              style={{
                fontSize: "1rem",
                cursor: "pointer",
                displayFlex: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
              htmlFor="file"
            >
              Profile Image
              <img
                src="https://cdn.iconscout.com/icon/free/png-512/free-upload-2030966-1714815.png?f=webp&w=256"
                width="32px"
                height="32px"
                alt='profile'
              />
            </label>
          </div>
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
