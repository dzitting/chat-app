import React, { useEffect } from 'react';
import HomePage from '../components/HomePage';
import { users } from '../data/database';
import { useSelector } from 'react-redux';
import { selectCurrentUser } from '../store/features/current-user/currentUserSlice';

export default function Home() {
    const currentUser = useSelector(selectCurrentUser);
    useEffect(() => {
        console.log(currentUser);
    }, [currentUser]);
    if(!currentUser){
        return <h1>Loading...</h1>
    } else {
        return (
            <HomePage users={users} />
        )
    }
}