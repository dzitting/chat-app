import React from "react";
import Message from "./Message";
import MessageMe from "./MessageMe";

export default function Chat() {
  return (
    <div className="chat">
      <h1>Chat with User</h1>
      <div id="msg-box">
      </div>
      <form>
        <div className="messages__form">
          <input id="text" type="text" placeholder="Enter message..." />
          <input id="file" type="file" style={{ display: "none" }} />
          <div style={{ width: 10 }} id="send">
            <label htmlFor="file">
              <img
                src="https://img.icons8.com/windows/32/file-upload.png"
                alt="upload icon"
              />
            </label>
            <button>Send</button>
          </div>
        </div>
      </form>
    </div>
  );
}
