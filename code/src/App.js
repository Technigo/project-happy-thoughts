import React, { useState } from 'react'
import { useEffect } from 'react'

import { ThoughtsMessage } from './Components/ThoughtsMessage.js'
import { ThoughtsForm } from './Components/ThoughtsForm.js'

export const App = () => {

  const apiUrl = "https://happy-thoughts-technigo.herokuapp.com/thoughts";
  const [messages, setMessages] = useState([]);

fetch(apiUrl)
  .then((apiData) => {
    return apiData.json()
  })
    .then((data) => {
      setMessages(data);
    }, []);

  return (
  <div>
    {/* <ThoughtsForm /> */}

    {messages.map((messageDetails) => (
      <ThoughtsMessage messageDetails={messageDetails}/>
    ))}
  </div>
  )
}
