import React, { useEffect, useState } from 'react';

import ThoughtForm from './components/ThoughtForm';
import HeartItem from './components/HeartItem';

import { API_URL, LIKES_URL } from './utils/urls';

export const App = () => {
  const [thoughts, setThoughts] = useState ([]);
  const [newThought, setNewThought] = useState ('');
  
  useEffect(() => {
    fetch(API_URL)
    .then((res) => res.json())
    .then ((data) => setThoughts(data)); 
  }, []); // <- empty [] tells the component to render when mounted, otherwise = infinite loop
  
  const onFormSubmit = (event) => {
  event.preventDefault();
  
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ message: newThought })
  };
  
  fetch(API_URL, options) //"get" will be used, if not options is identified
  .then((res) =>res.json())
  .then((data) => setThoughts([data, ...thoughts])) //set state handler:...new value of the state property
};

const onLikesIncrease = (thoughtId) => {
  const options = {
    method: 'POST',
  };
  
  fetch(LIKES_URL, options)
  .then((res) => res.json())
  .then((data) => { //v 1 increases likes only
    
    const updatedThoughts = thoughts.map((item) => {
      if (item._id === data._id){
        item.hearts += 1;
        return item;
      } else {
        return item;
      }
    });
    setThoughts(updatedThoughts);
  })};  
  return (
    <div>
      <ThoughtForm  
        onFormSubmit={onFormSubmit} 
        newThought={newThought}
        setNewThought={setNewThought}  
      />
      
      <HeartItem
        thoughts={thoughts}
        onLikesIncrease={onLikesIncrease}  
      />
    </div>
  )
  }
