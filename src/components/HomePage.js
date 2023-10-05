import React from 'react';
import ProfileAside from './ProfileAside';
import Messages from './Messages';
import Conversations from './Conversations';

export default function HomePage({users}) {
    const style = {
        display: "flex",
        width: '100vw',
    }
    return (
        <div style={style}>
            <ProfileAside />
            <Messages />
            <Conversations users={users}/>
        </div>
    );
}