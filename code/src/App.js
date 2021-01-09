import React, { useEffect, useState } from 'react'

import { Card } from 'components/Card'
import { MessageInput } from 'components/MessageInput'

export const App = () => {
  // App is responsible for fetching, listing, and posting the messages – as well as contains the like function (it's here because )
  const MESSAGES_URL_TECHNIGOSERVER = "https://happy-thoughts-technigo.herokuapp.com/thoughts"
  const MESSAGES_URL_AXELSERVER = "https://happy-thoughts-axel.herokuapp.com/thoughts"
  const [messages, setMessages] = useState([])

  useEffect(() => {
    fetchMessages()
  }, [])

  const fetchMessages = () => {
    fetch(MESSAGES_URL_AXELSERVER)
      .then((res) => {
        // This is the response we're getting – but we need to transform it to JSON.
        return res.json()
      })
      .then((data) => {
        // After the response is fetched, do some filtering (we only want the "message" part of the message object to be in the array).
        const filteredMessages = data.filter((message) => message.message)

        // Limit the amount of messages visible.
        const limitedMessages = filteredMessages.slice(0, 20)

        // Call the hook function (is that what it's called?) and set 'essages' to the limited messages.
        setMessages(limitedMessages)
      })
  }

  const postMessage = (message) => {
    // Fetches the messages URL, and does a post request containing the message part of the message (this is handled in the onPostMessage function which is being sent in with the MessageInput component).
    fetch(MESSAGES_URL_AXELSERVER, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message: message })
    })
      .then(() => {
        // When the message is done being posted, fetch the messages again, so the new post is visible.
        fetchMessages()
      })
  }

  const likeMessage = (messageID) => {
    fetch(`https://happy-thoughts-axel.herokuapp.com/thoughts${messageID}/like`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json"' }
    })
      .then(() => {
        fetchMessages()
      })
  }

  return (
    <main>
      <MessageInput
        onPostMessage={postMessage}
      />
      {/* Goes through the "messages" array, and mounts a new Card component filled with information about the post, as well as pass the onLikeMessage function. */}
      {messages.map((message) => {
        return (
          <Card
            key={message._id}
            message={message}
            onLikeMessage={likeMessage}
          />
        )
      })}

    </main>
  )
}
