import React, { useState, useEffect } from 'react';

import { MessageList } from './components/MessageList';
import { MessageInput } from './components/MessageInput';
import { MESSAGE_URL } from './urls';

export const App = () => {

  const [messages, setMessages] = useState([]);
  //const [postedMessage, setPostedMessage] = useState("");

  useEffect(() => {
    fetchMessages();
  }, []);

  const fetchMessages = () => {
    console.log("in fetchMessages");
    fetch(MESSAGE_URL)
      .then(res => res.json())
      .then(data => setMessages(data))
  }

  const reachMessageInput = (newMessage) => {
    console.log("in reachMessageInput");
    fetch(MESSAGE_URL,  {
      method: 'POST',
      headers: { 'Content-Type':'application/json' },
      body: JSON.stringify({ message: newMessage })
    })
    .then(() => fetchMessages())
    //.then(() => setPostedMessage(newMessage));
    //console.log("newMessage: " + newMessage);
  }

  const updateLikes = messageId => {    
    const updatedMessages = messages.map(message => {
      if (message._id === messageId) {
        message.hearts += 1;
        console.log("message: " + message.message)
      }
      return message;
    })
    setMessages(updatedMessages);
  }

  const onLiked = (messageId) => {
    console.log("i'm here now!" + messageId);
    fetch(`https://happy-thoughts-technigo.herokuapp.com/thoughts/${messageId}/like`, {
    //fetch(`https://happy-thoughts-technigo.herokuapp.com/thoughts/5f9c477e69d3ae00171aa23c/like`, {
      method: 'POST',
      headers: { 'Content-Type':'application/json' },
      body: ''
    }).then(() => updateLikes(messageId))
  }

  return (
    <div>
      <MessageInput onMessageChange={reachMessageInput}/>
      <MessageList messageList={messages} onLiked={onLiked}/>
    </div>
  )
}
