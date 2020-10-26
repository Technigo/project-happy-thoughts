import React, { useState, useEffect } from 'react';
// eslint-disable-next-line no-unused-vars
import moment from 'moment';

export const MessageList = () => {
  // Create state for messages
  const MESSAGES_URL = 'https://happy-thoughts-technigo.herokuapp.com/thoughts';
  const [messages, setMessages] = useState([]);

  // Use useEffect to fetch messages from backend
  // Do this on component load
  useEffect(() => {
    fetch(MESSAGES_URL)
      // eslint-disable-next-line arrow-parens
      .then(data => {
        return data.json();
      })
      // eslint-disable-next-line arrow-parens
      .then(data => {
        // Set the state, response is an array of messages
        // eslint-disable-next-line arrow-parens
        const filteredData = data.filter((message) => message.text);
        // Reverse list
        filteredData.reverse();
        setMessages(filteredData);
        console.log(data)
      });
  }, []);
  // Render messages using map
  return (
    <div>
      {
        // eslint-disable-next-line arrow-parens
        messages.map(message => (
          <p>{message.text}</p>
        ))
      }
    </div>
  );
};

