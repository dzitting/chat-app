import React from 'react';
import { Link } from 'react-router-dom';
import { getAuth, signOut } from "firebase/auth";
import { useSelector } from 'react-redux';
import { currentUserSelector } from '../store/User/currentUserSlice';

export default function Sidebar() {
    const auth = getAuth();
    const currentUser = useSelector(currentUserSelector);
    console.log(currentUser);
    return (
        <div className='sidebar'>
            <h1>{currentUser.displayName}</h1>
            <figure>
                <img src={currentUser.photoURL || 'https://img.icons8.com/windows/64/user-male-circle.png'} alt='profile'/>
            </figure>
            <Link to='/login' onClick={() => signOut(auth)}>Log Out</Link>
        </div>
    );
}