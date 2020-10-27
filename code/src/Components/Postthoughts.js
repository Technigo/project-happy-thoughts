import React, { useEffect, useState } from 'react';

import 'styles/postthoughts.css';

export const Postthoughts = () => {
  const MESSAGES_URL = "https://happy-thoughts-technigo.herokuapp.com/";
  const [thoughts, setThoughts] = useState([]);
  
  //const handleFormSubmit = (event) => {
  //  event.preventDefault();
  //}

  useEffect(() => {
    fetch(MESSAGES_URL, {
      method: 'POST',
      body: JSON.stringify({ message: 'Good thoughts only' })
    })
      .then((res) => res.json())
      .then((newThought) => {
        setThoughts((previousThoughts) => [newThought, ...previousThoughts])
      })
  }, []);
  

  return (
    <form className="post-box"> 
      What's making you happy right now?
      <input className="thought-input" type="text" onSubmit=""></input>
      <button type="submit" className="send-thought">
        <span role="img" aria-label="Red heart emoji">&#10084;&#65039; </span>
        Send Happy Thought
        <span role="img" aria-label="Red heart emoji"> &#10084;&#65039;</span>
      </button>
    </form>
  )

};