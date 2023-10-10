import React, { useEffect } from 'react';
import { selectSelectedConversation } from '../store/features/selected-conversation/selectedConversationSlice';
import { useSelector } from 'react-redux';
import MessagesPage from '../components/Messages';
import { db } from '../data/database';
import { doc, collection, getDocs, where } from 'firebase/firestore';
import { current } from '@reduxjs/toolkit';

export default function Messages({userDocs, currentUser, nextUser}) {
    const conversation = useSelector(selectSelectedConversation);

    return (
        <MessagesPage userDocs={userDocs} conversation={conversation} currentUser={currentUser}/>
    )
}