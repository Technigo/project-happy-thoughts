import React, { useState, useEffect } from "react";

import { MessageList } from "./components/MessageList";
import { MessageInput } from "components/MessageInput";
// import { FETCH_URL } from "./urls";
// import { POST_URL } from "./urls";

export const App = () => {
  const [messages, setMessages] = useState([]);
  const MESSAGES_URL = "https://happy-thoughts-technigo.herokuapp.com/thoughts";

  useEffect(() => {
    fetchMessages();
  }, []);

  const fetchMessages = () => {
    fetch(MESSAGES_URL)
      .then((res) => res.json())
      .then((data) => setMessages(data.reverse()));
  };

  const reachMessageInput = (newMessage) => {
    fetch(MESSAGES_URL, {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({ message: newMessage }),
    }).then(() => fetchMessages());
  };

  return (
    <div>
      <MessageInput onMessageChange={reachMessageInput} />
      <MessageList messageList={messages} />
    </div>
  );
};
