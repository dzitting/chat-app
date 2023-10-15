import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentChatUser } from "../store/Chat/currentChatUserSlice";

export default function User({key, user}) {
  const dispatch = useDispatch();
  const startConversation = (e) => {
    e.preventDefault();
    dispatch(setCurrentChatUser(user));
  }
  
  return (
    <div key={key} className="user" onClick={(e) => startConversation(e)}>
      <figure>
        <img
        style={{width: '100%', height: '100%', objectFit: 'contain'}}
          width="64px"
          height="64px"
          src={user.photoURL || "https://img.icons8.com/windows/32/user-male-circle.png"}
          alt="user-male-circle"
        />
      </figure>
      <div className="user__text">
        <h4>{user.displayName}</h4>
        <p>{user.email}</p>
      </div>
    </div>
  );
}
