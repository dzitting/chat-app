import React, {useState} from "react";
import SignUpPage from '../pages/SignUpPage';
import '../styles/login.modules.css';
import { createUserWithEmailAndPassword , updateProfile} from "firebase/auth";
import { auth, db } from '../firebase';
import {useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux';
import { createUser, currentUserSelector, updateUser } from "../store/User/currentUserSlice";
import { doc, setDoc } from "firebase/firestore"; 

export default function Signup() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const newUser = useSelector(currentUserSelector);

  const handleSignUp = async (e) => {
    e.preventDefault();
    dispatch(createUser({
      displayName: e.target[0].value,
      email: e.target[1].value,
      password: e.target[2].value,
      file: e.target[3].files[0],
    }));
    console.log(e.target[2].value);
    if(newUser){
      await createUserWithEmailAndPassword(auth, newUser.email, newUser.password)
        .then(async (userCredential) => {
          await updateProfile(userCredential.user, {
            displayName: newUser.displayName,
            password: newUser.password,
          });
          await setDoc(doc(db, "users", userCredential.user.uid), {
            name: newUser.displayName,
            email: newUser.email,
            password: newUser.password,
            uid: userCredential.user.uid
          });
          await setDoc(doc(db, "messages", userCredential.user.uid), {});
          dispatch(updateUser({uid: userCredential.user.uid}))
          navigate('/login');
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorCode, errorMessage);
        });
    }
  }

  // createUserWithEmailAndPassword(auth, email, password)
  // .then((userCredential) => {
  //   const user = userCredential.user;
  // }).catch((error) => {
  //   const errorCode = error.code;
  //   const errorMessage = error.message;
  // })
  return (
    <SignUpPage handleSignUp={handleSignUp} />
  );
}
