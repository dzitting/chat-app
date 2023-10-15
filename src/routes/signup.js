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
    dispatch(createUser(userObj));

    console.log(userObj);
    const userExists = await searchIfUserExists(userObj.displayName);
    console.log(userExists);

    if (!userExists) {
      createUserWithEmailAndPassword(auth, userObj.email, userObj.password)
        .then(async (userCredential) => {
          // Signed up
          const user = userCredential.user;
          if (user) {
            await updateProfile(auth.currentUser, {
              displayName: userObj.displayName,
              uid: user.uid,
            });
            dispatch(updateUser({ uid: user.uid }));
          }
          await setDoc(doc(db, "users", user.uid), {
            displayName: userObj.displayName,
            email: userObj.email,
            photoURL: userObj.photoURL,
            uid: user.uid,
            password: userObj.password,
          });
          await setDoc(doc(db, "messages", user.uid), {});
          if (file) {
            try {
              console.log(file);
              const storageRef = ref(storage, userObj.displayName);
              const uploadTask = uploadBytesResumable(storageRef, file);
              uploadTask.on(
                "state_changed",
                (snapshot) => {
                  // Observe state change events such as progress, pause, and resume
                  setShowProgress(true);
                  console.log("uploading..");
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
                  if(downloadURL)
                  {
                    console.log(`Got the URL ${downloadURL}`);
                    setPhotoURL(downloadURL);
                    dispatch(updateUser({ photoURL: downloadURL }));
                    await updateDoc(doc(db, "users", user.uid), {
                      photoURL: downloadURL,
                    });
                  }
                }
              );
            } catch (error) {
              console.log(error);
            }
          }else if(!file)
          {
            navigate("/login");
          }
          console.log(newUser);
        }).then(async () => {
          console.log(auth.currentUser);
          await updateProfile(auth.currentUser, {
            photoURL: photoURL,
          });
          navigate("/login");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorCode, errorMessage);
          // ..
        });
    } else {
      alert("Username already exists");
    }
  };

  return <SignUpPage handleSignUp={handleSignUp} />;
}
