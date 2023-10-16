import React, { useEffect, useRef, useState } from "react";
import Message from "./Message";
import MessageMe from "./MessageMe";
import { useSelector } from "react-redux";
import { currentChatUserSelector } from "../store/Chat/currentChatUserSlice";
import { currentUserSelector } from "../store/User/currentUserSlice";
import {
  collection,
  getDocs,
  query,
  where,
  setDoc,
  doc,
  onSnapshot,
  addDoc,
  collectionGroup,
} from "firebase/firestore";
import { db } from "../firebase";
import { ref } from "firebase/storage";

export default function Chat() {
  const [messages, setMessages] = useState([]);
  const user = useSelector(currentChatUserSelector);
  const loggedInUser = useSelector(currentUserSelector);
    const messageBoxRef = useRef(null); // Create a ref for the message box element

  useEffect(() => {
    try{
      if (user && loggedInUser) {
        const q = query(collection(db, "messages", loggedInUser.uid, "chats"));
        onSnapshot(q, (querySnapshot) => {
          const sortedMessages = querySnapshot.docs
            .map((doc) => doc.data())
            .filter((message) => message.to === loggedInUser.uid && message.uid === user.uid || message.to === user.uid && message.uid === loggedInUser.uid)
            .sort((a, b) => a.timestamp - b.timestamp);
          setMessages(sortedMessages);
        });
      }
    } catch(error) {
      console.log(error);
      alert('It looks like you were logged out!');
    }
  }, [user, loggedInUser]);

  useEffect(()=> {
    if (messageBoxRef.current) {
      messageBoxRef.current.scrollTop = messageBoxRef.current.scrollHeight;
    }
  })

  const sendMessage = async (e) => {
    e.preventDefault();

    const data = {
      from: loggedInUser.displayName,
      uid: loggedInUser.uid,
      message: e.target[0].value,
      timestamp: Date.now(),
      to: user.uid,
    };

    console.log(e.target[1].files[0]);
    console.log(messages);

    await addDoc(collection(db, "messages", user.uid, "chats"), data);
    await addDoc(collection(db, "messages", loggedInUser.uid, "chats"), data);

    e.target[0].value = "";
  };

  return (
    <div className="chat">
      <h1>Chat with {user ? user.displayName : "a Friend"}</h1>
      <div id="msg-box" ref={messageBoxRef} >
        {messages &&
          messages.map((message) =>
            message.uid === user.uid ? (
              <Message message={message}  />
            ) : message.uid === loggedInUser.uid && (
              <MessageMe message={message} />
            )
          )}
      </div>
      <form onSubmit={(e) => sendMessage(e)}>
        <div className="messages__form">
          <input id="text" type="text" placeholder="Enter message..." />
          <input id="file" type="file" style={{ display: "none" }} />
          <div style={{ width: 10 }} id="send">
            {/* <label htmlFor="file">
              <img
                src="https://img.icons8.com/windows/32/file-upload.png"
                alt="upload icon"
              />
            </label> */}
            <button>Send</button>
          </div>
        </div>
      </form>
    </div>
  );
}
