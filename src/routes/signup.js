import React, { useState } from "react";
import SignUpPage from "../pages/SignUpPage";
import "../styles/login.modules.css";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, db, storage } from "../firebase";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  createUser,
  currentUserSelector,
  updateUser,
} from "../store/User/currentUserSlice";
import { addDoc, doc, setDoc, updateDoc } from "firebase/firestore";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { searchIfUserExists } from "../utils/util-searchUser";

export default function Signup() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [photoURL, setPhotoURL] = useState("");
  const [progress, setProgress] = useState(null);
  const [showProgress, setShowProgress] = useState(false);
  const newUser = useSelector(currentUserSelector);

  const handleSignUp = async (e) => {
    e.preventDefault();
    const userObj = {
      displayName: e.target[0].value,
      email: e.target[1].value,
      photoURL: photoURL,
      uid: null,
      password: e.target[2].value,
    };
    const file = e.target[3].files[0];

    const userExists = await searchIfUserExists(userObj.displayName);
    if (!userExists) {
      createUserWithEmailAndPassword(
        auth,
        userObj.email,
        userObj.password
      ).then(async (userCredential) => {
        const user = userCredential.user;
        if (user) {
          dispatch(
            createUser({
              displayName: userObj.displayName,
              email: user.email,
              photoURL: user.photoURL,
              uid: user.uid,
              password: user.password,
            })
          );
          if (file) {
            const storageRef = ref(storage, userObj.displayName);
            const uploadTask = uploadBytesResumable(storageRef, file);
            uploadTask.on(
              "state_changed",
              (snapshot) => {
                // Observe state change events such as progress, pause, and resume
                setShowProgress(true);
                setProgress(
                  (snapshot.bytesTransferred / snapshot.totalBytes) * 100
                );
              },
              (error) => {
                // Handle unsuccessful uploads
                alert("There was an issue with uploading, please try again");
                console.log(error);
              },
              async () => {
                const downloadURL = await getDownloadURL(
                  uploadTask.snapshot.ref
                );
                setPhotoURL(downloadURL);
                await updateProfile(auth.currentUser, {
                  photoURL: downloadURL,
                  displayName: userObj.displayName,
                });
                await setDoc(doc(db, "users", user.uid), {
                  displayName: userObj.displayName,
                  email: user.email,
                  photoURL: downloadURL,
                  uid: user.uid,
                  password: userObj.password,
                });
                dispatch(
                  updateUser({
                    photoURL: downloadURL,
                  })
                );
                await setDoc(doc(db, "messages", user.uid), {
                  
                })
                setShowProgress(false);
                navigate('/login');
              }
            );
          } else {
            await setDoc(doc(db, "users", user.uid), {
              displayName: userObj.displayName,
              email: user.email,
              photoURL: user.photoURL,
              uid: user.uid,
              password: userObj.password,
            });
            dispatch(
              updateUser({
                photoURL: user.photoURL,
              })
            );
            await setDoc(doc(db, "messages", user.uid), {
              
            })
            setShowProgress(false);
            navigate('/login');
          }
        }
      });
    } else {
      alert('Username already exists.');
    }
  };

  return <SignUpPage handleSignUp={handleSignUp} showProgress={showProgress} progress={progress} />;
}
