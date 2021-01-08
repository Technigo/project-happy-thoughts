import React, { useEffect, useState } from 'react';

import Header from 'components/Header';
import ThoughtInput from 'components/ThoughtInput';
import { ThoughtList } from './components/ThoughtList';
import { THOUGHTS_URL } from './urls';

export const App = () => {
  const [thoughts, setThoughts] = useState([]);

  useEffect(() => {
    fetchThoughts();
  }, []);

  const fetchThoughts = () => {
    fetch(THOUGHTS_URL)
      .then(res => res.json())
      .then(data => setThoughts(data))
      .catch(error => console.error(error));
  }

  const postThought = (newThought) => {
    fetch(THOUGHTS_URL, { 
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message: newThought })
  })
    .then(() => fetchThoughts())
    .catch(error => console.error(error));
}

const postHearts = (messageId) => {
  const LIKES_URL = `https://happy-thoughts-api-project.herokuapp.com/thoughts/${messageId}/like`;

  fetch(LIKES_URL,{
    method:'POST',
    headers: { 'Content-Type': 'application/json' }
  })
    .then(() => {
      onLiked(messageId);
      fetchThoughts();
    });
};

const onLiked = (messageId) => {
  const newMessage = thoughts.map(thought => {
    if (thought._id === messageId) {
      thoughts.hearts +=1
    } 
    return thought
  })
  setThoughts(newMessage);
}
  
  return (
    <>
      <Header />
      <section className="thoughts-container">
        <ThoughtInput onThoughtChange={postThought} />
        <ThoughtList thoughtList={thoughts} onHeartsChange={postHearts}/>
    </section>
    </>
  );
}
