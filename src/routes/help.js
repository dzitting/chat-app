import React from 'react';
import HelpPage from '../pages/HelpPage'
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setCurrentChatUser } from '../store/Chat/currentChatUserSlice';
import { setCurrentUser } from '../store/User/currentUserSlice';
import { auth } from '../firebase';
import { signOut } from 'firebase/auth';

export default function Help() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const signOutClean = () => {
      try {
        dispatch(setCurrentChatUser(null));
        dispatch(setCurrentUser(null));
        signOut(auth)
          .then(() => {
            navigate("/");
          })
          .catch((error) => {
            console.log(error);
          });
  
      }catch(error){
        console.log(error);
      }
    }
    
    return (
        <div>
            <HelpPage signOutClean={signOutClean}/>
        </div>
    );
}