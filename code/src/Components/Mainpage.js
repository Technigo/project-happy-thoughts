import React, { useState, useEffect } from "react";

import Input from "./Input";
import Inputlist from "./Inputlist";

export const Mainpage = () => {
  // STATES FOR ENTIRE WEBPAGE
  const [thoughts, setThoughts] = useState([]);
  const [message, SetMessage] = useState('');

  // USEEFFECT SO THAT THE FUNCTION IS CALLED UPON COMPONENT MOUNTING
  useEffect(() => {
    fetchThoughts();
  }, []);

  // FETCHING OF API DATA
  const fetchThoughts = () => {
    fetch('https://happy-thoughts-technigo.herokuapp.com/thoughts')
    .then(res => res.json())
    .then(data => setThoughts(data))
    .catch(error => console.error(error))
  }

  // ALLOWING TO POST TO API 
  const handleInputChange = (event) => {
    SetMessage(event.target.value);
  }

  const handleFormSubmit = (event) => {
    event.preventDefault();

    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ message: message })
    }
  
    fetch('https://happy-thoughts-technigo.herokuapp.com/thoughts', options)
    .then(res => res.json())
    .then(() => fetchThoughts())
    .finally(() => SetMessage(''));
  }

  // ALLOWING TO LIKE A MESSAGE
  const handlelikeMessage = (messageID) => {
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
    }
  
    fetch(`https://happy-thoughts-technigo.herokuapp.com/thoughts/${messageID}/like`, options)
    .then(res => res.json())
    .then(() => fetchThoughts())
  }

      return (
        <main>
          <Input 
            message={message}
            onInputChange={handleInputChange}
            onFormSubmit={handleFormSubmit}
          />
          {thoughts.map(thought => (
          <Inputlist 
            key={thought._id}
            thought={thought}
            messageID={thought._id}
            onLikeMessage={handlelikeMessage}
          />
          ))}
        </main>
      )
}