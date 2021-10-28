import React, { useState, useEffect } from 'react';
import moment from 'moment';

import { API_URL } from 'utils/urls';
import NewThought from './NewThought'; // importing NewThought component that has form to post thoughts
import Thoughts from './Thoughts'; // importing NewThought component that displays thoughts

const HappyThoughts = () => {
  const [thoughts, setThoughts] = useState([]);
  const [newThought, setNewThought] = useState('');
  const [likeThought, setLikeThought]=useState('')

  //for GET
  useEffect(() => {
    fetchThoughts()
  }, []);

  const fetchThoughts = ()=>{
    fetch(API_URL)
    .then((res) => res.json())
    .then((data) => setThoughts(data));

  }
  // for setting the new thought
  const onInputChange = (event) => {
    setNewThought(event.target.value);
  };

  //for POST
const onFormSubmit = (event) => {
  event.preventDefault();

  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ message: newThought }),
  };

  fetch(API_URL, options)
    .then((res) => res.json())
    .then((data) => fetchThoughts())
    .then (()=> setNewThought(""));
};
  // for like a thought
  const onLikeAThought = (likeThought) => {

    
    console.log(likeThought)
    const API_URL_LIKE =
      `https://happy-thoughts-technigo.herokuapp.com/thoughts/${likeThought}/like`;   

   

  fetch(API_URL_LIKE, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    
  })
  .then((res) => res.json())
  .then((data) => fetchThoughts());
   
};


 

  //for mounting and rendering the components Thought and NewThought
  return (
    <>
      <NewThought
        onFormSubmit={onFormSubmit}
        newThought={newThought}
        onInputChange={onInputChange}
      />
      {thoughts.map((thought) => (
        <Thoughts
          key={thought._id}
          message={thought.message}
          date={moment(thought.createdAt).fromNow()}
          hearts={thought.hearts}
          key={thought._id}
          onLikeAThought={onLikeAThought}
        />
      ))}
    </>
  );
};

export default HappyThoughts;
