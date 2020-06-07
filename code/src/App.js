import React, { useState, useEffect } from "react";
import { MessageList } from "./MessageList";
import { PostMessage } from "./PostMessage";

const HappyURL = "https://happiestthoughtsapi.herokuapp.com/";

export const App = () => {
  const [thoughts, setThoughts] = useState([]);
  const [postedMessage, setPostedMessage] = useState("");

  useEffect (() => {
    fetch (HappyURL)
    .then (res => res.json()) 
    .then (json => setThoughts(json))
  }, [postedMessage]);

  const onFormSubmit = message => {
  setPostedMessage (message)
  }

  const onLiked = thoughtId => {
    const uppdatedThoughts = thoughts.map(thought => {
      if (thought._id === thoughtId) {
        thought.hearts += 1
      }
      return thought
    })
    setThoughts(uppdatedThoughts)
  }

  return (
    <div className='main'>
      <PostMessage onFormSubmit={onFormSubmit} />
      {thoughts.map (thought => (
      <MessageList key={thought._id} thought = {thought} onLiked = {onLiked} />
      ))}
    </div>
  )};
