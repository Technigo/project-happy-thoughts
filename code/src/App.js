import React, { useState, useEffect } from 'react';

import { MessageList } from 'components/MessageList';
import { MessageInput } from 'components/MessageInput';
import { MESSAGES_URL } from './Urls';

// MIGHT PUT STYLING IN SEPARAT COMPONENTS IF TIME
// import { messageList } from 'components/messageList.css';
// import { messageInput } from 'components/messageInput.css';


export const App = () => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    fetchMessages();
  }, []);

  const fetchMessages = () => {
    fetch(MESSAGES_URL)
      .then(res => res.json())
      .then(data => setMessages(data.reverse()))
      .catch(error => console.error(error));
  }

  const postSingleMessage = newMessage => {
    fetch(MESSAGES_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ text: newMessage })
     
    })
      .then(() => fetchMessages())
      .catch(error => console.error(error));
  }

  return (
    <div className="message-container">
      <MessageInput onMessageChange={postSingleMessage} />
      <MessageList messageList={messages} />
    </div>
  );
}




//   // Send the POST request with the input from your form (instead
//   // of 'Hello world' like this example does):
//   fetch('https://technigo-thoughts.herokuapp.com/', { 
//     method: 'POST', 
//     body: JSON.stringify({ message: 'Hello world' })
//   })
//     .then((res) => res.json())
//     .then((newThought) => {
//       // Now you have `newThought` which is the response from the
//       // API as documented at the top of this readme. You can use
//       // it to update the `thoughts` array: 
//       setThoughts((previousThoughts) => [newThought, ...previousThoughts])
//     })
// }
//


