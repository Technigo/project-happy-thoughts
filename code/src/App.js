/* eslint-disable max-len */
/* eslint-disable spaced-comment */
/* eslint-disable no-trailing-spaces */
import React, { useEffect, useState } from 'react';

import { NewThought } from 'components/NewThought';
import { ThoughtList } from 'components/ThoughtList';

export const App = () => {
  const [thoughts, setThoughts] = useState([]); //variable is used to store an array of objects, which will represent the thoughts fetched from the API. 
  const [loading, setLoading] = useState(false); // a boolean value that indicates whether the API call is in progress. 
  const [newMessage, setNewMessage] = useState(''); //variable to store the value of the text area in the NewThought component.

  //handleNewThoughtsChange is a function that updates the newMessage state variable when the user types in the text area.
  const handleNewThoughtsChange = (event) => {
    setNewMessage(event.target.value)
  } 
  //fetchThoughts function makes a GET request to the API to retrieve the thoughts and update the thoughts state variable. 
  const fetchThoughts = () => {
    setLoading(true)
    fetch('https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts')
      .then((res) => res.json())
      .then((data) => setThoughts(data))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false))
  } //end of fetch-function 
  
  //The useEffect hook is used to fetch the data from the API when the component mounts, 
  //and the fetched data is set to the thoughts state using the setThoughts function.
  useEffect(() => {
    fetchThoughts();
  }, []);

  //The onFormSubmit function is called when the user submits a new thought. 
  //It makes a POST request to the API with the new thought message and updates the thoughts state variable.
  const onFormSubmit = (event) => {
    event.preventDefault();

    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        message: newMessage
      })
    }

    fetch('POST https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts', options)
      .then((res) => res.json())
      .then(() => fetchThoughts())
      .finally(() => setNewMessage(''));
  }

  const onLikesIncrease = (LikeID) => {
    const options = { method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      } }
      
    fetch(`https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts/${LikeID}/like`, options)
      .then((res) => res.json())
      .then(console.log('yey it works.'))
      .catch((error) => console.error(error))
      .finally(() => fetchThoughts())
  }

  return (
    <div className="main-container">
      <div className="thoughts">
        <NewThought
          newMessage={newMessage}
          handleNewThoughtsChange={handleNewThoughtsChange}
          onFormSubmit={onFormSubmit} />
        <ThoughtList
          loading={loading}
          thoughts={thoughts}
          onLikesIncrease={onLikesIncrease} />
      </div>
    </div>
  );
};