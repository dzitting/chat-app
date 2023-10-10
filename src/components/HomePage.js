import React, {useEffect, useState} from 'react';
import ProfileAside from './ProfileAside';
import Messages from '../routes/messages';
import Conversations from './Conversations';
import { collection, doc, getDoc, getDocs } from "firebase/firestore";
import { db } from "../data/database";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "../store/features/current-user/currentUserSlice";
import { selectSelectedConversation } from "../store/features/selected-conversation/selectedConversationSlice";
import { addConversation, selectConversations } from '../store/features/selected-conversation/conversationsSlice';
import { useDispatch } from 'react-redux';
import { setMessages, selectMessages } from '../store/features/selected-conversation/messageListSlice';


export default function HomePage({users}) {
    const style = {
        display: "flex",
        width: '100vw',
    }
    const currentUser = useSelector(selectCurrentUser);
    const selectedConversation = useSelector(selectSelectedConversation);
    const conversations = useSelector(selectConversations);
    const messages = useSelector(selectMessages);
    const [nextUserId, setNextUserId] = useState(null);
    const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      // Reference the "messages" collection
      const messagesCollectionRef = doc(db, "messages", "user-id");
      const querySnapshot = await getDoc(messagesCollectionRef);
      dispatch(setMessages(querySnapshot?.data()?.id[currentUser.id.toString()]));
      const arr = querySnapshot?.data()?.id[currentUser.id.toString()].messages;
      const nextUser = arr?.filter((doc) => doc.from !== currentUser.id);
      if(nextUser)
      {
        setNextUserId(nextUser[0].from);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
      const fetchList = async() => {
          const list = await getDocs(collection(db, "users"));
          const arr = list.docs.map((doc) => doc.data());
          const usersToAdd = arr.filter((user) => user.id === nextUserId);
          dispatch(addConversation(usersToAdd));
      }
      fetchList();
  }, [nextUserId])
    
    return (
        <div style={style}>
            <ProfileAside currentUser={currentUser} />
            <Messages userDocs={messages} currentUser={currentUser} nextUser={nextUserId}/>
            <Conversations selectedConversation={selectedConversation} conversations={conversations}/>
        </div>
    );
}