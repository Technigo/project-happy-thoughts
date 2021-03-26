import React, { useState } from "react";

import { MessageList } from "./components/MessageList";
import { MessageForm } from "./components/MessageForm";

export const App = () => {
  const [messageList, setMessageList] = useState([]);
  const [newMessage, setNewMessage] = useState("")

  return (
    <main>
      <div className="wrapper">
        <MessageForm setMessageList={setMessageList}
        newMessage={newMessage} setNewMessage={setNewMessage} />
        <MessageList
          messageList={messageList}
          setMessageList={setMessageList}
          newMessage={newMessage} 
        />
      </div>
    </main>
  );
};
