import React, { useEffect, useState } from 'react'

import { MessageList } from 'components/MessageList';
import { MessageInput } from 'components/MessageInput';
import { Footer } from 'components/Footer';


const MESSAGES_URL = "https://happy-thoughts-technigo.herokuapp.com/thoughts"

export const App = () => {
  const [messages, setMessages] = useState([]);
  useEffect(() => {
    fetchMessages()
  }, [])

  const fetchMessages = () => {
    fetch(MESSAGES_URL)
      .then((response) => {
        return response.json()
      })
      .then((data) => {
        const filteredMessages = data.filter((message) => message.message)
        setMessages(filteredMessages)
      })
  }

  const postMessage = newMessage => {
    fetch(MESSAGES_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message: newMessage })
    })

      .then(() => fetchMessages())
    window.location.reload()
  }

  return (
    <section className="wrapper">
      <MessageInput onMessageChange={postMessage} />
      <MessageList messageList={messages} setMessageList={setMessages} />
      <Footer />
    </section>
  )
}
