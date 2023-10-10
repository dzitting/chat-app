import React from 'react';
import '../styles/profile.modules.css';
import { Link } from 'react-router-dom';

export default function ProfileAside({currentUser}) {
    const logOut = () => {
        window.location.href = "/login";
    }
    
    return (
        <aside>
            <h1>ProfileAside</h1>
            <h2>Welcome, {currentUser.name}</h2>
            <figure className='profile-image__container' style={{margin: '0 auto',width: '100px', height: '100px', overflow: 'hidden', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                <img className='profile-image__image' style={{width: '100%', height: '100%', objectFit: 'cover'}} src='https://blush.design/api/download?shareUri=CvkJHK6OO&w=800&h=800&fm=png' alt='profile'/>
            </figure>
            <h4>Configure Settings</h4>
            <ul style={{textAlign: 'center'}}>
                <li>
                    <Link to="#">Name</Link>
                </li>
                <li>
                    <Link to="#">Toggle Mode</Link>
                </li>
                <li>
                    <Link to="#">Text Size</Link>
                </li>
                <li>
                    <Link to="#">Profile Picture</Link>
                </li>
                <li>
                    <a href="#" onClick={logOut}>Log Out</a>
                </li>
            </ul>
        </aside>
    );
}