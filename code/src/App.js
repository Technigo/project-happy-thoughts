/* eslint-disabled */

import React, { useState, useEffect } from 'react';
import SendThought from './components/SendThought';
import MessageList from './components/MessageList';

const LIKES_API = (LikeID) => `https://happy-thoughts-technigo.herokuapp.com/thoughts/${LikeID}/like`

export const App = () => {
  const [newMessage, setNewMessage] = useState('');
  const [messageList, setMessageList] = useState([]);
  const [loading, setLoading] = useState(true);
 

  //Fetch API
  const fetchMessages = () => {
    setLoading(false);
    fetch('https://happy-thoughts-technigo.herokuapp.com/thoughts')
      .then((res) => res.json())
      .then((data) => setMessageList(data))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }

  //UseEffect hook gets all 20 recent thoughts
  useEffect(() => {
    fetchMessages();
  }, [newMessage]);

 
  const onNewMessageChange = (event) => {
    setNewMessage(event.target.value)
  }

  //Post for new thought
  const onNewMessageSubmit = (event) => {
    event.preventDefault();

    const options = {
      method: 'POST',
      body: JSON.stringify({
        message: newMessage
      }),
      headers: {
        'Content-Type': 'application/json'
      },
    }

    fetch('https://happy-thoughts-technigo.herokuapp.com/thoughts', options)
      .then((res) => res.json())
      .then(() => fetchMessages())
      .finally(() => setNewMessage(''))
  }

/* Post for like */
const onLikesIncrease = (LikeID) => {
  const options = { method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    } }

  fetch(LIKES_API(LikeID), options)
    .then((res) => res.json())
    .then(console.log('yey it works.'))
    .catch((error) => console.error(error))
    .finally(() => fetchMessages())
  }


  return (
    <div className="outer-wrapper">
      <div className="inner-wrapper">

        <SendThought
          newMessage={newMessage}
          onNewMessageChange={onNewMessageChange}
          onNewMessageSubmit={onNewMessageSubmit} />

        <MessageList
          loading={loading}
          messageList={messageList}
          setMessageList={setMessageList}
          
          onLikesIncrease={onLikesIncrease}
           />

      </div>
    </div>

  );
}

