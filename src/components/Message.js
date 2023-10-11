import React from 'react';

export default function Message() {
    return (
        <div className="message">
            <figure>
                <img src='https://img.icons8.com/windows/48/user-male-circle.png' alt='profile image in message box'/>
            </figure>
            <div className="message__text">
                <h4>User's Name</h4>
                <p>This is a message.</p>
            </div>
        </div>
    );
}