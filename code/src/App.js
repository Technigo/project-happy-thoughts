import React, { useState, useEffect } from "react";
import SendMessageCard from "components/SendMessageCard";
import MessageGroup from "components/MessageGroup";
import { fetchMessages } from "assets/networking";

export const App = () => {
  const [messages, setMessages] = useState([]);

  useEffect(() => fetchMessages((data) => setMessages(data.results)), []);

  return (
    <main>
      <SendMessageCard setMessages={setMessages} />
      <MessageGroup messages={messages} />
    </main>
  );
};
