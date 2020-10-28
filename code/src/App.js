import React, { useState, useEffect } from 'react'

import { THOUGHTS_URL } from 'component/Urls';
import { MessageInput } from './component/InputThoughts';
import { MessageList } from './component/ListThoughts';
import { Likes } from './component/Like'

export const App = () => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    fetchMessages();
  }, []);

  const fetchMessages = () => {
    fetch(THOUGHTS_URL)
      .then(res => res.json())
      .then(data => setMessages(data))
      .catch(err => console.log("error:", err))
  }


  //POST text input new value to serever
  const postMessageInput = (newMessage) => {
    fetch(THOUGHTS_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: newMessage })
    })
      .then(() => fetchMessages())
      .catch(err => console.log("error:", err))
  }

  return (
    <div>
      <MessageInput onMessageChange={postMessageInput} />
      <MessageList messageList={messages} />
      <Likes />
    </div>
  );
}
