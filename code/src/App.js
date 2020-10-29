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
      body: JSON.stringify({ message: newThought})
  })
    .then(() => fetchThoughts())
    .catch(error => console.error(error));
}
  
  return (
    <>
      <Header />
      <section className="thoughts-container">
        <ThoughtInput onThoughtChange={postThought} />
        <ThoughtList thoughtList={thoughts}/>
    </section>
    </>
  );
}
