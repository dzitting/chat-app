import React from "react";
import {Form, Link} from 'react-router-dom';
export default function LoginPage({userEmail, userPassword, handleChange, handleSubmit}) {

  return (
    <div className="login-container__wrapper">
      <div className="login-container">
        <h1>Login</h1>
        <span>Welcome Back!</span>
        <Form onSubmit={(e) => handleSubmit(e)}>
          <input onChange={(e) => handleChange(e)} name='email' type="email" placeholder="Email" value={userEmail}/>
          <input onChange={(e) => handleChange(e)} name='password' type="password" placeholder="Password" value={userPassword} />
          <button>Login</button>
        </Form>
        <div className="login-container--signup">
          <p>Don't have an account?</p>
          <Link to="/signup">Signup</Link>
        </div>
      </div>
    </div>
  );
}
