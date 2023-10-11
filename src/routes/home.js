import React, { useEffect, useState } from 'react';
import HomePage from '../pages/HomePage';
import '../styles/home.modules.css';
import { useSelector } from 'react-redux';
import { currentUserSelector } from '../store/User/currentUserSlice';
import { useNavigate } from 'react-router';
import { db } from '../firebase';
import { collection, query, where, getDocs} from 'firebase/firestore';

export default function Home() {
    const currentUser = useSelector(currentUserSelector);
    const navigate = useNavigate();
    const [searchName, setSearchName] = useState('');
    const [results, setResults] = useState([]);
    useEffect(() => {
        console.log(currentUser);
        if(!currentUser.email || !currentUser.uid)
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
        setSearchName(e.target[0].value);
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
    return (
        <>
            <HomePage handleSubmit={handleSubmit} results={results}/>
        </>
    );
}