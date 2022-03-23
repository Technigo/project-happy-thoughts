import React, { useState, useEffect } from "react";

import Input from "./Input";
import Inputlist from "./Inputlist";

export const Mainpage = () => {
  const [thoughts, setThoughts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [message, SetMessage] = useState('');

  useEffect(() => {
    fetchThoughts();
  }, []);

  const fetchThoughts = () => {
    setLoading(true);
    fetch('https://happy-thoughts-technigo.herokuapp.com/thoughts')
    .then(res => res.json())
    .then(data => setThoughts(data))
    .catch(error => console.error(error))
    .finally(() => setLoading(false));
  }

  const handleInputChange = (event) => {
    SetMessage(event.target.value);
  }

  const onFormSubmit = (event) => {
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

      return (
        <main>
          <Input 
            message={message}
            onInputChange={handleInputChange}
            onFormSubmit={onFormSubmit}
          />
          <Inputlist 
            loading={loading} 
            thoughts={thoughts}/>
        </main>
      )
}