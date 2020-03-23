import React, { useState, useEffect } from 'react';
import ReactDom from 'react-dom';
import { Form } from './components/Form';
import { MessageList } from 'components/MessageList';


export const App = () => {

  const messages_URL = ("https://technigo-thoughts.herokuapp.com/")
  const [thoughts, setThoughts] = useState([]) 
  const [myPost, setMyPost] = useState('')

  useEffect(() => {
    
    fetch(messages_URL)
      .then(res => res.json())
      .then(json => setThoughts(json)
      )}, [myPost])
  
      const handleFormSubmit = message => {
        fetch(messages_URL, {
          method: 'POST',
          body: JSON.stringify({ message }),
          headers: { "Content-Type": "application/json" }
        })
        .then(() => setMyPost(message))
        .catch(err => console.log("error:", err))
      }


  return (
    <div>
    <Form onFormSubmit={handleFormSubmit}/>
    <MessageList />
    </div>
  )

  } 