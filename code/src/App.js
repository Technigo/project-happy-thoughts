import React, { useState, useEffect } from 'react'
import "./app.css"
import { MessageText } from "./MessageText"
import { MessagePost } from "./MessagePost"
import { LikeButton } from "./LikeButton"
import { TimePosted } from "./TimePosted"
import { Loader } from "./Loader"
export const App = () => {
  const [messages, setMessages] = useState([])
  const [newThought, setNewThought] = useState('')
  const [isLoading, setIsLoading] = useState(true)
  const [sendingThought, setSendingThought] = useState(false)
  useEffect(() => {
    fetch("https://williamjensen-happythoughts.herokuapp.com/")
      .then(res => res.json())
      .then(data => {
        setMessages(data)
        setIsLoading(false)
      })
  }, [])

  return (

    <div className="flex-container">
      {isLoading && <Loader />}
      <MessagePost newThought={newThought} setNewThought={setNewThought}
        setSendingThought={setSendingThought} sendingThought={sendingThought}
        messages={messages} setMessages={setMessages} />


      {messages &&
        messages.map((message) => {

          return <div key={message._id} className="thoughts-container">
            <MessageText text={message.message} />
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
