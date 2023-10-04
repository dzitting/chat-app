import React from "react";
import { Form } from "react-router-dom";


export default function SignUpPage({users, newUser, handleChange, isLoading, handleSubmit}) {
    if(isLoading)
    {
        return (
            <div>
                We're loading right now...
            </div>
        )
    } else {
        return (
          <div>
              <Form method="POST" action="/users" onSubmit={(e) => handleSubmit(e)}>
                  <label>Full Name</label>
                  <input onChange={(e) => handleChange(e)} name='name' type='text' value={newUser.name} required/>
                  <label>Email</label>
                  <input onChange={(e) => handleChange(e)} name='email' type='email'value={newUser.email} required/>
                  <label>Password</label>
                  <input onChange={(e) => handleChange(e)} name='password' type='password' value={newUser.password} required/>
                  <input type="submit" value="Sign Up" />
              </Form>
          </div>
        )
    }
}
