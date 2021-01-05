/* eslint-disable */
import React, { useState, useEffect } from 'react';

import { Header } from './components/Header';
import { MessageList } from './components/MessageList';
import { MessageForm } from './components/MessageForm';
import { THOUGHTS_URL } from './components/urls';

export const App = () => {
  // Stores message-input and changes the state of messages.
  const [messages, setMessages] = useState([]);
  // useEffect's functionality is called when component is mounted - after
  // the return of jsx. useEffect allows us to catch a moment in the lifecycle of
  // the App-component. useEffect calls the fetchMessages-function
  useEffect(() => {
    fetchMessages();
  }, []);

  // A funtion that fetches data (messages) from the server and stores
  // the value using useState and setMessages.
  const fetchMessages = () => {
    fetch(THOUGHTS_URL)
      .then((res) => res.json())
      .then((data) => setMessages(data))
      .catch((error) => console.error(error));
  };
  // A function for posting a new message TO the server. The fetch
  // posts a new message (posts new data) to the server. And then the
  // fetch calls the function fetchMessages which once again fetches new
  // data (messages) FROM the server to App.js. App.js again stores this new message
  // and passes the value to the MessageList component using the prop messageList.
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
  // A function that updates the number of likes by posting to the server. Posting new data - heart likes - 
  // via App.js
  // Matches the messageId with heart like.
  // After the post, a new GET request is activated via fetchMessage.
  //`https://happy-thoughts-technigo.herokuapp.com/thoughts/${messageId}/like`
  const postHearts = (messageId) => {
    fetch(`https://project-happy-thoughts-anna.herokuapp.com/messages/${messageId}/like`, {
      method: 'POST',
      body: '',
      headers: { 'Content-Type': 'application/json' }
    }).then(() => {
      //onLiked(messageId);
      fetchMessages();
    });
  };

  // The function onLiked below updates the browser locally but does not POST
  // hearts to the server. Can be used to avoid time lag - to show likes if the response
  // from the fetch takes some time. (true?)
  { /* }
  const onLiked = (messageId) => {
    const updatedMessage = messages.map((message) => {
      // eslint-disable-next-line no-underscore-dangle
      if (message._id === messageId) {
        message.hearts += 1
      }
      return message
    })
    setMessages(updatedMessage)
  };
*/ }

  // When App.js is mounted, but BEFORE fetching FROM the server, jsx is
  // returned.
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