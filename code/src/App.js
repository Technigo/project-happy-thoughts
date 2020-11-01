import React, { useState } from 'react'

import { MessageInput } from './components/MessageInput.js'
import { MessageList } from './components/MessageList.js'
import { MessageUrl } from './components/Urls.js'

//how is my approach in general component and logic wise? 
//how do I put the below fetch in another file? import and export? how do I handle the state?

export const App = () => {

  const [messages, setMessages] = useState([])

  const getMessages = () => {

    fetch(MessageUrl)
      .then(result => {
        return result.json()
      })
      .then(data => {
        setMessages(data) //storing the messages from the api in the state variable messages 
      })
  }

  return (
    <>
      <MessageInput getMessages={getMessages} />
      <MessageList getMessages={getMessages} messages={messages} />
    </>
  )
}
