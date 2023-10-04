import React, {useState} from 'react';
import { db, users } from '../data/database';
import LoginPage from '../components/LoginPage';

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorOccurred, setError] = useState(false);

    const handleChange = (e) => {
        e.preventDefault();
        setEmail(e.target.value);
    }

    const handleChangePass = (e) => {
        e.preventDefault();
        setPassword(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        users.forEach((user) => {
            if(user.data().email === email && user.data().password === password) {
                console.log('Login successful');
                window.location.href = '/home';
                return;
            }
        })
        setError(true);
    }

    return (
        <LoginPage 
        email={email}
        password={password}
        handleSubmit={handleSubmit}
        handleChange={handleChange}
        handleChangePass={handleChangePass}
        error={errorOccurred}/>
    )
}