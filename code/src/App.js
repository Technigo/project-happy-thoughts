import React, { useState, useEffect } from 'react'

import { API_URL } from './components/API_URL';
import { FormInput } from './components/FormInput';
import { MessageList } from './components/MessageList';
import { PageLoader } from './components/PageLoader';

export const App = () => {
  const [allMessages, setAllMessages] = useState([]);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    fetchAllMessages();
  }, [])

  // Fetching all the thoughts
  const fetchAllMessages = () => {
    fetch(API_URL)
      .then(res => res.json())
      .then(messages => {
        setAllMessages(messages)
        setLoading(false)})
      .catch(err => console.error(err));  
  }

  // Clicking the submit button, posting message
  const onSubmit = (message) => {
    fetch(API_URL, {
      method: "POST",
      body: JSON.stringify({ message: message }),
      headers: { "Content-Type": "application/json" }
    })
      .then(() => {
        setLoading(true)
        fetchAllMessages()})
      .catch(err => console.log("error:", err))
  }

  // Button for likes
  const onLikeClick = (id) => {
    fetch(`${API_URL}/${id}/like`, {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
    })
    .then(() => fetchAllMessages())
    .catch(err => console.log("error:", err))
  }


  return (
  
    <main className="main-container">
      <FormInput 
        onNewMessage={onSubmit}/>
      {loading ? 
        <PageLoader /> 
        :
        <MessageList
          messageList={allMessages}
          onLikeClick={onLikeClick} />
      }
    </main>

  )
}

