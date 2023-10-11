import React, { useEffect, useState } from 'react';
import HomePage from '../pages/HomePage';
import '../styles/home.modules.css';
import { useSelector } from 'react-redux';
import { currentUserSelector } from '../store/User/currentUserSlice';
import { useNavigate } from 'react-router';
import { db } from '../firebase';
import { collection, query, where, getDocs} from 'firebase/firestore';
import { auth } from '../firebase';

export default function Home() {
    const currentUser = useSelector(currentUserSelector); //Gets current user's info from state
    const navigate = useNavigate();
    const [searchName, setSearchName] = useState(''); //Local state to search a name
    const [results, setResults] = useState([]); //Local state to store results
    useEffect(() => {
        if(!currentUser.email || !currentUser.uid || auth.currentUser === null ) //Checks if a user is logged in to redirect to login screen
        {
            navigate('/login');
        }
    });

    useEffect(() => {
        if(results)
        {
            console.log(results);
        }
    }, [results])
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        // setSearchName(e.target[0].value);
        console.log(searchName);
        if(searchName)
        {
            const q = query(
                collection(db, "users"),
                where("name", "==", searchName)
            );
            const querySnapshot = await getDocs(q);
            querySnapshot.forEach((doc) => {
                setResults(prev => [...prev, doc.data()]);
            });
            console.log(results);
        }
    }

    const handleChange = (e) => {
        e.preventDefault();
        setSearchName(e.target.value);
    }
    return (
        <>
            <HomePage handleSubmit={handleSubmit} results={results} handleChange={handleChange}/>
        </>
    );
}