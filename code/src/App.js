import React, {useEffect, useState} from 'react';


import ThoughtsForm from './components/ThoughtsForm';
import ThoughtsContainer from './components/ThoughtsContainer';
import {API_URL} from './reusable/urls';


export const App = () => {
  const [thoughts, setThoughts] = useState([]);
  const [newThought, setNewThought] = useState('');

  useEffect (() => {
    fetchThoughts();
  }, []);

  const fetchThoughts = () => {
    fetch(API_URL)
    .then(response => response.json())
    .then(thoughts => setThoughts(thoughts))
    .catch(err => console.error(err));
    
  }

  const onNewThoughtChange = (event) => {
    setNewThought(event.target.value)
  }

  const onFormSubmit = (event) => {
    event.preventDefault();

    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({message: newThought})
    };

    fetch(API_URL, options)
    .then(response => response.json())
    .then(receivedThought => setThoughts([...thoughts, receivedThought]));
  }


  return (
    <>
      <ThoughtsForm 
        thoughts={thoughts} 
        newThought={newThought}
        onNewThoughtChange={onNewThoughtChange}
        onFormSubmit={onFormSubmit}
        /> 
      <ThoughtsContainer thoughts={thoughts}/>
      <div>Icons made by Good Ware from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
    </>
  )
}
