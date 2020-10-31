import React, { useEffect, useState } from 'react';
import moment from "moment";

import { Card } from 'components/Card'

// REMOVE THESE
import ic_like_0 from '../assets/ic_like_0.svg';
import ic_like_1 from '../assets/ic_like_1.svg';

export const MessageList = () => {

  const MESSAGES_URL = "https://happy-thoughts-technigo.herokuapp.com/thoughts";
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    fetchMessages()
  }, [])

  const fetchMessages = () => {
    fetch(MESSAGES_URL)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        const filteredMessages = data.filter((message) => message.message);
        const limitedMessages = filteredMessages.slice(0, 20);
        setMessages(limitedMessages);
      })
  }

  const postMessage = (message) => {
    fetch(MESSAGES_URL, {
      method: 'POST',
      headers: { 'Content-Type':'application/json' },
      body:JSON.stringify({message: message})
    })
      .then(()=> {
        fetchMessages()
      })
  }

  return (
    <>{messages.map((message) => {
      return (
        <Card key={message._id} message={message}/>
      )
    })}

    </>
  )
}
