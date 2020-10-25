import React, { useState, useEffect } from 'react';
import { ThoughtsCard } from 'components/ThoughtsCard';

export const App = () => {
  const [thoughts, setThoughts] = useState([]);

  useEffect(() => {
    //Fetches data from the API: an array including all Thoughts and 
    //uses the setThoughts setter function to assign that data to the
    //thoughts variable
    fetch('https://happy-thoughts-technigo.herokuapp.com/thoughts')
      .then(response => response.json())
      .then(json => setThoughts(json))
  }, []);

  return (
    <>
      <section className="though-cards-container">
        {thoughts.map((thought) => (
          <ThoughtsCard key={thought._id} message={thought.message} timeCreated={thought.createdAt} />
        ))}
      </section>
    </>
  )
};