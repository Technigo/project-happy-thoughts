import React, { useState, useEffect } from 'react'

import { THOUGHTS_URL, likeUrlFor } from 'component/Urls';

import { MessageInput } from './component/MessageInput';
import { MessageList } from './component/MessageList';

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


  //Post new value text input to server then fetch
  const postMessageInput = (newMessage) => {
    fetch(THOUGHTS_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: newMessage })
    })
      .then(() => fetchMessages())
      .catch(err => console.log("error:", err))
  }

  // Post new heart value to server then fetch
  const postHeart = event => {
    const thoughtId = event._id
    fetch(likeUrlFor(thoughtId),
      {
        method: 'POST',
        body: "",
        headers: { "Content-Type": "application/json" },
      }).then(() => {
        onMessageLiked(thoughtId)
        fetchMessages();
      });
  };

  const onMessageLiked = thoughtId => {
    const updatedMessages = messages.map((message) => {
      if (message._id === thoughtId) {
        message.hearts += 1
      }
      return message
    })
    setMessages(updatedMessages)
  }

  return (
    <div className="container">
      <MessageInput onCreateMessage={postMessageInput} />
      <MessageList messageList={messages} onLike={postHeart} />
    </div>
  );
}
