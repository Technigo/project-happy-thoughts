import React, { useEffect, useState } from 'react';
import moment from 'moment';

import { MESSAGE_URL} from '.././urls';

export const MessageList = () => {  
  //const MESSAGE_URL = "https://happy-thoughts-technigo.herokuapp.com/thoughts";
  // Create state for messages
  const [messages, setMessages] = useState([]);

  // Use useEffect to fetch messages from backend
  useEffect(() => {
    // Fetch messages from backend
    fetch(MESSAGE_URL)
      .then(res => {
          // Get the JSON of the response body
          return res.json();
      })
      .then(data => {
        // Set the state based on the response, data is an array of messages
        // const filteredData = data.filter(message => {
        //     // Do not send empty messages
        //     return message.message;
        // });

        // Sort the data based on date
        // setMessages(filteredData.reverse());
        setMessages(data);
      });
    
  }, []);

  // Render messages using map
  return (
    <div>
      {
        // Add a section for each message returned by the backend
        messages.map(message => (
          <p className="message" key={message.createdAt}>
            {message.message}                
            <span className="message-time">
              {moment(message.createdAt).fromNow()}
            </span>
            </p>
        ))
      }
    </div>
  )
}