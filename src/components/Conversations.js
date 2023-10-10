import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setSelectedConversation } from "../store/features/selected-conversation/selectedConversationSlice";
import '../styles/conversations.modules.css';

export default function Conversation({ conversations, selectedConversation }) {
  console.log(conversations);
  const dispatch = useDispatch();
  const handleConvoChoice = (e, conversation) => {
    e.preventDefault();
    dispatch(setSelectedConversation(conversation));
  }
  return (
    <div>
      <h1>Conversations</h1>
      {conversations && conversations?.length < 1 ? (
        <div>
          <h4>No conversations yet</h4>
          <button>Start Conversation</button>
        </div>
      ) : null}
      {conversations && conversations.length > 0
        ? conversations.map((conversation) => {
            return (
              <div class="convo">
                <Link to={`/events`} onClick={(e) => handleConvoChoice(e, conversation)}>
                  <h3>{conversation.name}</h3>
                </Link>
              </div>
            );
          })
        : null}
    </div>
  );
}
