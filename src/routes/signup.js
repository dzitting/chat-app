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
import { doc, setDoc } from "firebase/firestore";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { searchIfUserExists } from "../utils/util-searchUser";

export default function Signup() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const newUser = useSelector(currentUserSelector);
  const [photoURL, setPhotoURL] = useState("");
  const [progress, setProgress] = useState(null);
  const [showProgress, setShowProgress] = useState(false);

  const handleSignUp = async (e) => {
    e.preventDefault();
    dispatch(createUser({}));
    console.log(newUser);
    dispatch(
      createUser({
        displayName: e.target[0].value,
        email: e.target[1].value,
        password: e.target[2].value,
      })
    );
    console.log(e.target[3].files[0]);
    if (newUser) {
      try {
        console.log(newUser.displayName);
        const exists = await searchIfUserExists(newUser.displayName);
        if (!exists) {
          const userCredential = await createUserWithEmailAndPassword(
            auth,
            newUser.email,
            newUser.password
          );
          const storageRef = ref(storage, userCredential.user.uid);
          const file = e.target[3].files[0];
          if (file) {
            const uploadTask = uploadBytesResumable(storageRef, file);
            uploadTask.on(
              "state_change",
              (snapshot) => {
                setProgress(
                  (snapshot.bytesTransferred / snapshot.totalBytes) * 100
                );
                console.log("Uploading image...");
                setShowProgress(true);
              },
              (error) => {
                alert("There was an issue with uploading.");
              },
              async () => {
                const downloadURL = await getDownloadURL(
                  uploadTask.snapshot.ref
                );
                console.log(downloadURL);

                // Now, update the state with the downloadURL
                setPhotoURL(downloadURL);
              }
            );
          }else if(!file){
            await setDoc(doc(db, "users", userCredential.user.uid), {
              name: newUser.displayName,
              email: newUser.email,
              password: newUser.password,
              uid: userCredential.user.uid,
              photoURL: '', // Use the updated downloadURL
            });
          }

          // Update Firestore and user profile with the updated URL
          await setDoc(doc(db, "users", userCredential.user.uid), {
            name: newUser.displayName,
            email: newUser.email,
            password: newUser.password,
            uid: userCredential.user.uid,
            photoURL: photoURL, // Use the updated downloadURL
          });
          await updateProfile(userCredential.user, {
            displayName: newUser.displayName,
            password: newUser.password,
            photoURL: photoURL, // Use the updated photoURL
          });

          // Continue with the rest of your code
          dispatch(
            updateUser({ uid: userCredential.user.uid, photoURL: photoURL })
          );
          await setDoc(doc(db, "messages", userCredential.user.uid), {});
          navigate("/login");
        } else if (exists) {
          alert("That username already exists.");
        }
      } catch (error) {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      }
    }
  };

  return <SignUpPage handleSignUp={handleSignUp} />;
}
