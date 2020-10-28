import React, { useState } from "react";

import MessageList from "./components/MessageList";
import MessageInput from "./components/MessageInput";
import "./app.css";

const App = () => {
  const [messages, setMessages] = useState([]);

  return (
    <div className="app-container">
      <MessageInput setMessages={setMessages} />
      <MessageList messages={messages} setMessages={setMessages} />
    </div>
  );
};

export default App;
