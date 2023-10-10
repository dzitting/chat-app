import React, { useEffect, useState } from "react";
import { users } from "../data/database";
import LoginPage from "../components/LoginPage";
import "../styles/login.modules.css";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentUser } from "../store/features/current-user/currentUserSlice";
import { selectCurrentUser } from "../store/features/current-user/currentUserSlice";
import { useNavigate } from "react-router-dom";
import { current } from "@reduxjs/toolkit";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorOccurred, setError] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const currentUser = useSelector(selectCurrentUser);
  useEffect(() => {
    console.log(currentUser);
    if(currentUser){
        navigate('/home');
    }
  },[])

  const handleChange = (e) => {
    e.preventDefault();
    setEmail(e.target.value);
  };

  const handleChangePass = (e) => {
    e.preventDefault();
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    users.forEach((user) => {
      if (user.data().email === email && user.data().password === password) {
        console.log("Login successful!");
        const userInfo = user.data();
        console.log(userInfo);
        dispatch(setCurrentUser(userInfo));
        navigate('/home');
      }
    });
    setError(true);
  };

  return (
    <div id="login-body">
      <LoginPage
        email={email}
        password={password}
        handleSubmit={handleSubmit}
        handleChange={handleChange}
        handleChangePass={handleChangePass}
        error={errorOccurred}
      />
    </div>
  );
}
