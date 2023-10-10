import React from "react";
import "../styles/messages.modules.css";
import { Form } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectMessageContent, addMessage, handleNewMessage } from "../store/features/selected-conversation/messageListSlice";
import { useDispatch } from "react-redux";

export default function MessagesPage({ userDocs, currentUser, conversation }) {
  const messageContent = useSelector(selectMessageContent);
  const messages = useSelector((state) => state.messageList.messages);
  const dispatch = useDispatch();

  const handleMessageSubmit = (e) => {
    const messageObj = {
      message: messageContent.message,
      from: currentUser.id,
      sentAt: new Date(),
    }
    dispatch(addMessage(messageObj));
    console.log(messages);
  }
  
  const handleChange = (e) => {
    dispatch(handleNewMessage(e.target.value));
  }

  if(!conversation) {
    return (
      <div>
        <h1>Messages</h1>
        <div style={{width: '55vw'}} id="messages">
        <p>No conversation selected</p>
        <div id="msg-box">
        </div>
      </div>
      </div>
    )
  }

  return (
    <div id="container">
      <h1>Message {conversation.name}</h1>
      <div id="messages">
        {conversation &&
          userDocs.messages.map((doc, key) => {
            if (doc.from === currentUser.id || doc.from === conversation.id) {
              return (
                <div key={key}>
                  <h6>{doc.from === currentUser.id ? "You" : conversation.name}</h6>
                  <p>{doc.message}</p>
                </div>
              );
            } else {
              return <div key={key}></div>;
            }
          })}
        <div id="msg-box">
          <Form onSubmit={(e) => handleMessageSubmit(e)}>
            <textarea onChange={(e) => handleChange(e)} type="text" value={messageContent.message} />
          </Form>
          <button>Send</button>
        </div>
      </div>
    </div>
  );
}
