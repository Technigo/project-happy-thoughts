import React, { useState, useEffect } from 'react'
import "./app.css"
import { MessagePost } from "./MessagePost"
import { LikeButton } from "./LikeButton"
import { TimePosted } from "./TimePosted"
export const App = () => {
  const [messages, setMessages] = useState([])
  const [newThought, setNewThought] = useState()
  useEffect(() => {
    fetch("https://technigo-thoughts.herokuapp.com/")
      .then(res => res.json())
      .then(data => {
        console.log(data)
        setMessages(data)
      })
  }, [])

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch("https://technigo-thoughts.herokuapp.com/", {
      method: 'POST',
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ message: newThought })
    })
      .then(res => res.json())
      .then(latestThought => {
        setMessages(messages => [latestThought, ...messages])
        console.log(messages)
      })
  }
  return (

    <div className="flex-container">
      <form className="thoughts-container form" onSubmit={handleSubmit}>
        <MessagePost newThought={newThought} setNewThought={setNewThought} />
      </form>
      {messages &&
        messages.map((message) => {

          return <div key={message._id} className="thoughts-container">
            <p>{message.message}</p>
            <article className="likes-and-time">
              <LikeButton messages={messages} setMessages={setMessages} id={message._id} hearts={message.hearts} />
              <TimePosted createdAt={message.createdAt} />
            </article>
          </div>
        })

      }
    </div>
  )

}
