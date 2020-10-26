import React, { useState, useEffect } from 'react';
import { ThoughtsCard } from 'components/ThoughtsCard';
import { Form } from 'components/Form';

export const App = () => {
  const [thoughts, setThoughts] = useState([]);
  const [likes, setLikes] = useState(0);

  useEffect(() => {
    //Fetches data from the API: an array including all Thoughts and 
    //uses the setThoughts setter function to assign that data to the
    //thoughts variable
    fetch('https://happy-thoughts-technigo.herokuapp.com/thoughts')
      .then(response => response.json())
      .then(json => {
        //Filter only Thoughts that have some text in it
        const filteredThoughts = json.filter(thought => {
          return thought.message !== '';
        });
        setThoughts(filteredThoughts)
      });
  }, []);

  return (
    <>
      <Form />
      
      <section className="though-cards-container">
        {thoughts.map((thought) => (
          <ThoughtsCard key={thought._id} id={thought._id} message={thought.message} timeCreated={thought.createdAt} likes={likes} setLikes={setLikes} hearts={thought.hearts}/>
        ))}
      </section>
    </>
  )
};

//Make sure: list the most recent thoughts at the top and older thoughts at the bottom (sorted)