import React, { useState, useEffect } from 'react'

import { API_URL } from './components/API_URL';
import { FormInput } from './components/FormInput';
import { MessageList } from './components/MessageList';
import { PageLoader } from './components/PageLoader';

export const App = () => {
  const [newMessage, setNewMessage] = useState('');
  const [messageList, setMessageList] = useState([]);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    fetchAllMessages();
  }, [])

  // Fetching all the thoughts
  const fetchAllMessages = () => {
    fetch(API_URL)
      .then(res => res.json())
      .then(messages => {
        setMessageList(messages)
        setLoading(false)
      })
      .catch(err => console.error(err));  
  }

  // Clicking the submit button, posting message
  const handleMessageSubmit = (e) => {
    e.preventDefault();

    fetch(API_URL, {
      method: "POST",
      body: JSON.stringify({ message: newMessage }),
      headers: { "Content-Type": "application/json" }
    })
      .then(() => {
        setLoading(true)
        fetchAllMessages()
        setNewMessage('')
      })
      .catch(err => console.log(err))
  }

  // Fetching likes
  const handleLikeClick = (id) => {
    fetch(`${API_URL}/${id}/like`, {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
    })
    .then(res => res.json())
    .then(() => fetchAllMessages())
    .catch(err => console.log(err))
  }

  return (
    <main className="main-container">
      <FormInput 
        newMessage={newMessage}
        setNewMessage={setNewMessage}
        onMessageSubmit={handleMessageSubmit}/>
      {loading ? 
        <PageLoader /> 
        :
        <MessageList
          messageList={messageList}
          handleLikeClick={handleLikeClick} />
      }
    </main>
  )
}

