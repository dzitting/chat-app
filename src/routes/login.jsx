import React, {useState, useEffect} from "react";
import "../styles/login.modules.css";
import LoginPage from "../pages/LoginPage";
import { signInWithEmailAndPassword, signOut } from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { setCurrentUser } from "../store/User/currentUserSlice";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
   
  }, [])

  const handleChange = (e) => {
    if (e.target.name === "email") {
      setEmail(e.target.value);
    } else {
      setPassword(e.target.value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        const token = userCredential._tokenResponse.registered;
        const userObj = {
          displayName: user.displayName,
          email: user.email,
          photoURL: user.photoURL,
          uid: user.uid,
          password: user.password,
        };
        if(token && user) {
          dispatch(setCurrentUser(userObj));
          navigate('/home');
        }
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
        navigate('/error');
      });
  };

  return (
    <LoginPage
      userEmail={email}
      uaserPassword={password}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
    />
  );
}
