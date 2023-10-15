import React from "react";
import "../styles/help.modules.css";
import { Link } from "react-router-dom";

export default function HelpPage({signOutClean}) {
  return (
    <div atyle={{ display: "flex", flexDirection: "column", justifyContent: 'center', alignItems: 'center' }}>
      <div className="navbar-help">
        <div className="navbar-help__links">
            <ul>
                <li>
                    <Link to="/home">Home</Link>
                </li>
                <li>
                    <Link to='/login' onClick={() => signOutClean()}>Sign Out</Link>
                </li>
            </ul>
        </div>
        <h1>Help Page</h1>
      </div>
      <h2>How to Use</h2>
      <div style={{ padding: 30, backgroundColor: "#7e7e7e51" }}>
        <h3 className="left">Updating your Profile Picture</h3>
        <p className="left">
          First, select the Edit Image button, and use the upload icon to select
          the image you want to use.
        </p>
        <p className="left">
          Then click the 'Upload' button to upload the image into the icon
          holder. If there is no image, you will be prompted to selected an
          image again.
        </p>
        <br />
        <h3 className="left">Finding a User</h3>
        <p className="left">
          When you want to start a conversation with a new user, simply go to
          the search bar beneath 'Conversations' and type in their display name.
        </p>
        <p className="left">
          This must be typed exact or the user will not return.{" "}
        </p>
        <br />
        <h4 className="left">Example</h4>
        <p className="left">Looking for user: Jane1X</p>
        <p className="left">Search input `jane1x`</p>
        <p className="left">
          Returns: no results. Because `jane1x` does not match `Jane1X`
        </p>
        <br />
        <br />
        <h3 className="left">Start a Conversation</h3>
        <p className="left">
          To start a conversation, simply select the user you want to chat with,
          and send them a message from the input area.
        </p>
        <p className="left">
          You can check who you are chatting with through the top bar that says
          'Chat with ... ' Chats are sent in real time.
        </p>
        <h5 className="left">
          Note* At this time chats cannot be deleted or 'unsent'.
        </h5>
      </div>
    </div>
  );
}
