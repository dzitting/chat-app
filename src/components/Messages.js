import React from "react";
import "../styles/messages.modules.css";

export default function Messages() {
  return (
    <div id="container">
      <h1>Messages</h1>
      <div id="messages">
        {Array.from({ length: 10 }).map((_, i) => (
            <div key={i}>Message {i + 1}</div>
          ))
        }
        <div id="msg-box">
          <form>
            <textarea type="text" />
          </form>
          <button>Send</button>
        </div>
      </div>
    </div>
  );
}
