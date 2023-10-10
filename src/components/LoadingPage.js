import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { selectConversations } from '../store/features/selected-conversation/conversationsSlice';
import { useNavigate } from 'react-router';

export default function LoadingPage() {
    const conversations = useSelector(selectConversations);
    const navigate = useNavigate();
    useEffect(() => {
        if (conversations) {
            navigate("/home/messages/");
        } else if (!conversations) {
            navigate("/home");
        }
    }, [])
}