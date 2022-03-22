import React, { useState } from "react";
import SendMessageCard from "components/SendMessageCard";
import MessageGroup from "components/MessageGroup";

import { fetchMessages } from "assets/networking";

export const App = () => {
  const [messages, setMessages] = useState([]);

  fetchMessages((data) => setMessages(data));

  return (
    <main>
      <SendMessageCard />
      <MessageGroup messages={messages} />
    </main>
  );
};
