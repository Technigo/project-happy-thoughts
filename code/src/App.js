import React, { useState, useEffect } from "react";
// import cors from "cors";

import { MessageList } from "components/MessageList";
import { MessageInput } from "components/MessageInput";
import { Footer } from "components/Footer";


export const App = () => {
  const MESSAGES_URL = "https://happy-thinking-api.herokuapp.com/thoughts";

  // "https://happy-thoughts-technigo.herokuapp.com/thoughts"; the old API

  const [messages, setMessages] = useState([]);


// this function starts to retrieve a new message when the message input is mounted
  useEffect(() => {
    fetchMessages();
  }, []);

 // captures array of new messages from API and updates state, res = results, data = raw data from the array
  const fetchMessages = () => {
    fetch(MESSAGES_URL)
      .then((res) => res.json())
      .then((data) => {
        setMessages(data);
      })
      .catch((error) => console.error(error));
  };

 // sends a new message to the API and captures the most recent message
  const postSingleMessage = (newMessage) => {
    fetch(MESSAGES_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json",'Access-Control-Allow-Origin': '*'},
      body: JSON.stringify({ message: newMessage }),
    })
      .then(() => fetchMessages())
      .catch((error) => console.error(error));
  };

  // sends likes / hearts to APIn

  const postHearts = (messageId) =>
    fetch(
      `https://happy-thinking-api.herokuapp.com/thoughts/${messageId}/like`,
      //  `https://happy-thoughts-technigo.herokuapp.com/thoughts/{messageId}/like`, old API

      {
        method: "POST",
        headers: { "Content-Type": "application/json", 'Access-Control-Allow-Origin': '*'},
      }
    ).then(() => {
      fetchMessages();
    });


  return (
    <main>
      <MessageInput onMessageChange={postSingleMessage} />
      <MessageList messageList={messages} postHearts={postHearts}  />
      <Footer />
    </main>
  );
};
