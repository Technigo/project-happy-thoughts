/* eslint-disable */
import React, { useState, useEffect } from 'react';

import { Header } from './components/Header';
import { MessageList } from './components/MessageList';
import { MessageForm } from './components/MessageForm';
import { THOUGHTS_URL } from './components/urls';

export const App = () => {
  const [messages, setMessages] = useState([]);
  // useEffect's functionality is called only when component is mounted (due to []) - after
  // the return of jsx. useEffect allows us to catch a moment in the lifecycle of
  // the App-component. useEffect calls the fetchMessages-function.
  useEffect(() => {
    fetchMessages();
  }, []);

  // A funtion that fetches data (messages) from the server and stores
  // the value locally using useState and setMessages.
  const fetchMessages = () => {
    fetch(THOUGHTS_URL)
      .then((res) => res.json())
      .then((data) => setMessages(data))
      .catch((error) => console.error(error));
  };
  // A function for posting/saving a new message TO the server. 
  // The newMessage has been passed back to App.js as prop from Messageform - the user input.
  // Then the fetch calls the function fetchMessages which once again fetches all updated messages 
  // FROM the server to App.js. 
  const postSingleMessage = (newMessage) => {
    fetch(THOUGHTS_URL,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: newMessage })
      })
      .then(() => fetchMessages())
      .catch((error) => {
        console.error(error);
      })
  };
  // A function that updates/saves the number of likes by posting to the server. 
  // Matches the messageId (req param from backend) with messageList._id passed from MessageList?
  // After the post, a new GET request is activated via fetchMessage, returning the updated data.
  const postHearts = (messageId) => {
    fetch(`https://project-happy-thoughts-anna.herokuapp.com/messages/${messageId}/like`, {
      method: 'POST',
      body: '',
      headers: { 'Content-Type': 'application/json' }
    }).then(() => {
      fetchMessages();
    });
  };

  // When App.js is mounted, but BEFORE fetching FROM the server, jsx is returned.
  // App.js catches new input from the MessageForm by first
  // creating a connection using a prop - onMessageChange. But in order to
  // get something back from the MessageForm, the form has to be submitted first.
  // Only then can we send the new input value to App.js (and to server) using the prop
  // created in App.js.
  // The MessageList component is responsible for displaying data in the browser.
  // App.js passes data to MessageList and MessageList displays the new messages and
  // the number of likes.
  return (
    <main>
      <Header />
      <MessageForm onMessageChange={postSingleMessage} />
      <div className="container-messages">
        {messages.map((message) => (
          <MessageList
            messageList={message}
            key={message._id}
            onHeartsChange={postHearts} />
        ))}
      </div>
    </main>
  );
};