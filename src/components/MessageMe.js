import React from "react";
import { useSelector } from "react-redux";
import { currentUserSelector } from "../store/User/currentUserSlice";

export default function MessageMe({ message }) {
  const currentUser = useSelector(currentUserSelector);
  return (
    <>
      <div className="message-me">
        <figure >
          <img
            src={currentUser.photoURL ||"https://img.icons8.com/windows/48/user-male-circle.png"}
            alt="profile image in message box"
          />
        </figure>
        <div className="message-me__text">
          <h4>{message.name}</h4>
          <p>{message.message}</p>
        </div>
      </div>
      <span
        style={{
          margin: 0,
          padding: 0,
          fontSize: "0.8rem",
          width: "100%",
          textAlign: "center",
        }}
      >
        {new Intl.DateTimeFormat("en-US", { timeStyle: "short" }).format(
          message.timestamp
        )}
      </span>
    </>
  );
}
