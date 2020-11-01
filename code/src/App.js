import React, { useState, useEffect } from 'react';

import { MessageList } from 'components/MessageList';
import { MessageInput } from 'components/MessageInput';
// import { Likes } from 'components/Likes';



export const App = () => {

  const MESSAGES_URL = "https://happy-thoughts-technigo.herokuapp.com/thoughts";
  const LIKEDHEARTS_URL = "https://happy-thoughts-technigo.herokuapp.com/thoughts/${messageId}/like";
  
  const [messages, setMessages] = useState([]);

  // kommer sätta igång hämta nytt meddelande när messageinput är mounted
  useEffect(() => {
    fetchMessages();
  }, []);

  // fångar in array av nya meddelanden från API och uppdaterar state
  const fetchMessages = () => {
    fetch(MESSAGES_URL)
      .then(res => res.json())
      .then(data => { 
        setMessages(data)})
      .catch(error => console.error(error));
  }

  // skickar nytt meddelande till API:n och fånga det senaste meddelandet
  const postSingleMessage = newMessage => {
    fetch(MESSAGES_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message: newMessage })
     
    })
      .then(() => fetchMessages())
      .catch(error => console.error(error));
  }

  // skickar in likes/ hjätan till APIn

//   const postHearts = (messageId) =>

//   fetch(LIKEDHEARTS_URL, {
//     method: 'POST',
//     body:'',
//     headers: { 'Content-Type': 'application/json' },
//   })

//     .then (() => {
//     onLiked(messageId);
//     fetchMessages();
// });
// };

// const onLiked = (messageId) => {
//   const newMessage = messages.map(message => {
//     if (message._id === messageId) {
//       messages.hearts +=1
//     } 
//     return message
//   })
//   setMessages(newMessages);
// }



return (
  <main className="message-container">
  
    <MessageInput onMessageChange={postSingleMessage} />
    <MessageList messageList={messages}/>
    {/* <Likes  onHeartsChange={postHearts}/> */}

  </main>
);

}