import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { getAuth, signOut } from "firebase/auth";
import { useDispatch, useSelector } from 'react-redux';
import { currentUserSelector, setCurrentUser } from '../store/User/currentUserSlice';
import { setCurrentChatUser } from '../store/Chat/currentChatUserSlice';

export default function Sidebar() {
    const auth = getAuth();
    const currentUser = useSelector(currentUserSelector);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const signOutClean = () =>{
        try {
            dispatch(setCurrentChatUser(null));
            dispatch(setCurrentUser(null));
        }catch(error){
            console.log(error);
        }
        signOut(auth).then(() => {
            navigate('/login');
        }).catch((error) => {
            console.log(error);
        })
    }
    return (
        <div className='sidebar'>
            <h1>{currentUser.displayName}</h1>
            <figure>
                <img src={currentUser.photoURL || 'https://img.icons8.com/windows/64/user-male-circle.png'} alt='profile'/>
            </figure>
            <Link to='/login' onClick={() => signOutClean()}>Log Out</Link>
        </div>
    );
}