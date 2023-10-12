import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getAuth, signOut, updateProfile } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import {
  currentUserSelector,
  setCurrentUser,
  updateUser,
} from "../store/User/currentUserSlice";
import { setCurrentChatUser } from "../store/Chat/currentChatUserSlice";
import { storage } from "../firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { SignOutClean } from "../utils/signOut";

export default function Sidebar() {
  const auth = getAuth();
  const currentUser = useSelector(currentUserSelector);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [progress, setProgress] = useState(null);
  const [showProgress, setShowProgress] = useState(false);
  const [editingProfileImg, setEditingProfileImg] = useState(false);

  useEffect(() => {
    if(progress > 99)
    {
      setProgress(null);
      setShowProgress(false);
    }
  },[progress]);

  const editImage = async (e) => {
    e.preventDefault();
    const file = e.target[0].files[0];
    if (file) {
      const storageRef = ref(
        storage,
        currentUser.displayName + currentUser.uid
      );
      const uploadTask = uploadBytesResumable(storageRef, file);
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          // Observe state change events such as progress, pause, and resume
          setShowProgress(true);
          setProgress((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
        },
        (error) => {
          // Handle unsuccessful uploads
          alert("There was an issue with uploading, please try again");
          console.log(error);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
            await updateProfile(auth.currentUser, {
              photoURL: downloadURL,
            })
              .then(() => setShowProgress(false))
              .then((downloadURL) =>
                dispatch(updateUser({ photoURL: downloadURL }))
              );
          });
        }
      );
    } else {
      alert("No image selected");
    }
  };
  return (
    <div className="sidebar">
      <h1>{currentUser.displayName}</h1>
      <figure>
        <img
          src={
            currentUser.photoURL ||
            "https://img.icons8.com/windows/64/user-male-circle.png"
          }
          alt="profile"
        />
      </figure>
      <ul style={{textAlign: 'center', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column'}}>
        <li>
          {editingProfileImg ? (<form onSubmit={(e) => editImage(e)}>
            <input id="file" type="file" style={{ display: "none" }} />
            <label htmlFor="file" style={{ width: "100%", cursor: "pointer" }}>
              <img
                src="https://cdn.iconscout.com/icon/free/png-512/free-upload-2030966-1714815.png?f=webp&w=256"
                width="32px"
                height="32px"
                alt="profile"
              />
            </label>
            {progress < 100 && showProgress ? (
              <progress value={progress} max="100" style={{ width: "80%" }} />
            ) : null}
            <button type="submit">Upload</button>
            <img style={{cursor: 'pointer'}} width='32px' height='32px' onClick={(e)=>setEditingProfileImg(false)} src='https://d3sxshmncs10te.cloudfront.net/icon/free/svg/1214345.svg?token=eyJhbGciOiJoczI1NiIsImtpZCI6ImRlZmF1bHQifQ__.eyJpc3MiOiJkM3N4c2htbmNzMTB0ZS5jbG91ZGZyb250Lm5ldCIsImV4cCI6MTY5NzMyODAwMCwicSI6bnVsbCwiaWF0IjoxNjk3MTMyNjI1fQ__.4fbb8e77765add4c16593a998dea59848b1679d6df85b9fdb46fbc42d99684d0' alt='close editing' />
          </form>):(<button onClick={(e) => setEditingProfileImg(true)}>Edit Image</button>)}
        </li>
        <li>
          <Link to='/home/help'><button>Help</button></Link>
        </li>
      </ul>
      <Link to="/login" onClick={() => SignOutClean()}>
        Log Out
      </Link>
    </div>
  );
}
