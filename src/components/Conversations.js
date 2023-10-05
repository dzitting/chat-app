import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../data/database";

export default function Conversations({ users }) {
  const [conversations, setConversations] = useState([]);
  useEffect(() => {
    const loadConversationTabs = async () => {
      const querySnapshot = await getDocs(
        collection(db, "users", "janedoe", "conversations")
      );
      querySnapshot.forEach((doc) => {
        console.log(conversations);
        setConversations((prev) => [...prev, doc.data()]);
      });
    };
    loadConversationTabs();
  }, []);

  return (
    <div>
      <h1>Conversations</h1>
      {conversations.map((conversation, key) => (
        <div style={{ display: "flex" }}>
          {key}
          <figure>
            <img src="#" />
          </figure>
          <p>Click to resume messaging...</p>
        </div>
      ))}
    </div>
  );
}
