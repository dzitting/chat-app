import React, { useEffect, useState } from "react";
import User from "./User";
import { collection, query, getDocs, where } from "firebase/firestore";
import { db } from "../firebase";
import { useSelector } from "react-redux";
import { currentUserSelector } from "../store/User/currentUserSlice";
import { currentChatUserSelector } from "../store/Chat/currentChatUserSlice";

export default function Conversations({ handleSubmit, results, handleChange }) {
  const currentUser = useSelector(currentUserSelector);
  const user = useSelector(currentChatUserSelector);
  const [currentMessages, setCurrentMessages] = useState([]);
  
  useEffect(() => {
    const fetchMessageList = async () => {
      const q = query(
        collection(db, "messages", currentUser.uid, "chats"),
      );
      const msgArr = [];
      const UIDs = new Set();
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        if(!UIDs.has(doc.data().to) && !msgArr.includes(doc.data().to) && doc.data().to !== currentUser.uid) {
          console.log(`Adding ${doc.data().to}`);
          msgArr.push(doc.data().to);
          UIDs.add(doc.data().to);
        }else if(doc.data().from !== currentUser.displayName && !UIDs.has(doc.data().uid)) {
          msgArr.push(doc.data().uid);
          UIDs.add(doc.data().uid);
        }
      });
      if(msgArr)
      {
        console.log(msgArr);
        msgArr.map((doc) => {
          console.log(doc);
          const q2 = query(
            collection(db, "users"),
            where("uid", "==", doc),
          );
          getDocs(q2).then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
              if(currentMessages.includes(doc.data())) {
                return;
              }
              setCurrentMessages((prev) => [...prev, doc.data()]);
            });
          });
        })
      }
    };
  
    fetchMessageList();
  }, []);

  return (
    <div className="conversations">
      <h1>Conversations</h1>
      <form onSubmit={(e) => handleSubmit(e)}>
        <div className="conversations__form">
          <input
            onChange={(e) => handleChange(e)}
            type="text"
            placeholder="Find user..."
          />
          <img
            src="https://img.icons8.com/windows/32/search--v1.png"
            alt="Search icon"
          />
        </div>
      </form>
      {currentMessages
        ? currentMessages.map((message) => (
            <User key={message.uid} user={message} />
          ))
        : null}
      {results &&
        results.map((result) => <User key={result.id} user={result} />)}
    </div>
  );
}
