import React, { useEffect, useState } from 'react';

import Header from 'Components/Header';
import { NewThought } from 'Components/NewThought';
import { ThoughtList } from 'Components/ThoughtList'


export const App = () => {
const [thoughts, setThoughts] = useState([]); //innan: thoughts, setThoughtList 
const [loading, setLoading] = useState(false);
  const [newMessage, setNewMessage] = useState(''); //

  const handleNewThoughtsChange = (event) => {
    setNewMessage(event.target.value)
  }
  return (
    <div className='main-container'>
    <Header />
    <div className='thoughts'>
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
