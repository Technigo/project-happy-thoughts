import React, { useState, useEffect } from 'react';
import SendThought from './components/SendThought';
import MessageList from './components/MessageList';
import SiteHeader from './components/SiteHeader';

//const LIKES_API = (LikeID) => `https://happy-thoughts-technigo.herokuapp.com/thoughts/${LikeID}/like`
//const API = 'https://happy-thoughts-technigo.herokuapp.com/thoughts'

const LIKES_API = (LikeID) => `https://project-happy-thoughts-api-easgcdauca-lz.a.run.app/thoughts/${LikeID}/like`
const API = 'https://project-happy-thoughts-api-easgcdauca-lz.a.run.app/thoughts'


export const App = () => {
  const [newMessage, setNewMessage] = useState('');
  const [messageList, setMessageList] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch API
  const fetchMessages = () => {
    setLoading(false);
    fetch(API)
      .then((res) => res.json())
      .then((data) => setMessageList(data))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }

  // UseEffect hook gets all 20 recent thoughts
  useEffect(() => {
    fetchMessages();
  }, [newMessage, MessageList]);

  // To post new thought
  const onNewMessageChange = (event) => {
    setNewMessage(event.target.value)
  }

  const onNewMessageSubmit = (event) => {
    event.preventDefault();

    const options = {
      method: 'POST',
      body: JSON.stringify({
        message: newMessage
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    }

    fetch(API, options)
      .then((res) => res.json())
      .then(() => fetchMessages())
      .finally(() => setNewMessage(''))
  }
      

  // Shows likes
  function onLikesIncrease(LikeID) {
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      }
    };

    fetch(LIKES_API(LikeID), options)
      .then((res) => res.json())
      .catch((error) => console.error(error))
      .finally(() => fetchMessages());
  }

  return (
    <div className="outer-wrapper">
      <SiteHeader />
      <div className="inner-wrapper">
        <SendThought
          newMessage={newMessage}
          onNewMessageChange={onNewMessageChange}
          onNewMessageSubmit={onNewMessageSubmit} />
        <MessageList
          loading={loading}
          messageList={messageList}
          setMessageList={setMessageList}
          onLikesIncrease={onLikesIncrease} />
      </div>
    </div>

  );
}

