import React, { useState, useEffect } from 'react'
import { LikeButton } from './LikeButton'
import moment from 'moment'
import('messageList.css')



export const MessageList = () => {
  const [messages, setMessages] = useState([])//Create state for messages
  const APImessages = 'https://technigo-thoughts.herokuapp.com/'

  //Use useEffect(function that triggers on render)to fetch messages from backend
  //UseEffect(function that triggers on render)since react rerenders the app everytime 
  //the state changes the useEffect gets triggered everytime the state changes
  //in this case if messages changes that will trigger useEffect
  //We want to use useEffect to show us messages from the backend
  useEffect(() => {
    //Fetch from backend

    fetch(APImessages)
      .then((res) => {
        return res.json()
      })
      .then(jsonData => {
        //Set the state 
        const filteredjsonData = jsonData.filter(message => {
          return message.message
        })

        setMessages(filteredjsonData)
        console.log(jsonData)
      })
    }, [])

  const onThoughtLiked = (likedThoughtId) => {
    const updatedThoughts = messages.map((thought) => {
      if (thought._id === likedThoughtId) {
        thought.hearts += 1
      }
      return thought
    })
    setMessages(updatedThoughts)
  }

  //we are using useEffect to fetch from the backend
  //we are transforming the data in the API to json
  //then we use jsonData(could be called anything) that is an array
  //to set the state of messages 
  //when the state changes the code after the return will be called again
  //and the page will refresh

  //here we want to render the result of the fetch to make it visiable on the screen
  //Render messages using map
  return (
    <div>
      <article>
        {messages.map(message => (
          <div className="message"
            key={message._id}>
            <p className="message-text">{message.message}</p>
            <p className="message-time">{moment(message.createdAt).fromNow()}</p>
            <div className="hearts-container">
              <LikeButton liked={onThoughtLiked} hearts={message.hearts} thoughtId={message._id} />
            </div>
          </div>
      ))}

      </article>
    </div>
)
}
