import moment from "moment"
import React, { useState, useEffect } from "react"

import { Likeathought } from './LikeButton'

export const MessageList = () => {
  const LIKES_URL = "https://happy-thoughts-technigo.herokuapp.com/thoughts"
  const [messages, setMessages] = useState([])
  // Use [] in the useState since it is an array that we get in the get-request

  useEffect(() => {
    fetch(LIKES_URL)
      .then((response) => {
        return response.json()
      })
      .then((data) => {
        console.log(data)
        // Filter out if any thoughts are empty
        const filteredData = data.filter((getMessage) => getMessage.message)
        setMessages(filteredData.slice(0, 20))
      })
  }, [])
   // If we want we can put the fetch in another separate component

  const onThoughtLiked = (id) => {
    const updatedThoughts = messages.map((thought) => {
      if (thought._id === id) {
        thought.hearts += 1;
      }
      return thought;
    })
    setMessages(updatedThoughts);
  }

  return (
    <div>
      {messages.map((getMessages) => {
        return (
          <div className="message-card" key={getMessages._id}>
            <p className="message-text">{getMessages.message}</p>
            <div className="likes-time-container">
            <Likeathought 
                key={getMessages._id}
                id={getMessages._id}
                onThoughtLiked={onThoughtLiked}
                hearts={getMessages.hearts}
              />              
              <p>{moment(getMessages.createdAt).fromNow()}</p>
            </div>
          </div>
        )
      })}
    </div>
  );
}