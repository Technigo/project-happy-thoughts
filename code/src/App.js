import React, { useState, useEffect } from 'react';
import { ThoughtsCard } from 'components/ThoughtsCard';
import { Form } from 'components/Form';

export const App = () => {
  const [thoughts, setThoughts] = useState([]);
  const FETCH_URL = 'https://happy-thoughts-technigo.herokuapp.com/thoughts';

  useEffect(() => {
    //Fetches data from the API: an array including all Thoughts and 
    //uses the setThoughts setter function to assign that data to the
    //thoughts variable
    fetch(FETCH_URL)
      .then(response => response.json())
      //json is now the variable containing thoughts array we got from the API
      .then(json => {
        //Filter only Thoughts that have some text in it
        const filteredThoughts = json.filter(thought => {
          return thought.message !== '';
        });
        //We setThoughts again, this time after running the filter, so now the
        //thoughts array we work with is the filtered one with no empty thoughts
        setThoughts(filteredThoughts)
      });
  }, []);

  const addLike = (id) => {
    //addLike gets an id as an argument which is the id we got from the function
    //handleLikes, which is the function posting thoughts to the API. This was we make
    //sure we are adding the like to the right thought. addLike will add +1 to the
    //amount of hearts that thought had previously and show that in the browser
    //right away without triggering a new fetch. That way the user gets inmediate
    //confirmation that the like went thru. We check if the thought.id is equal to
    //the id argument we got, and if that's the case we add +1
    const updatedLikes = thoughts.map((thought) => {
      if(thought._id === id) {
        thought.hearts += 1;
      }
      return thought;
    })
    //we setThoughts again so the thoughts now show with the updated amount of hearts
    setThoughts(updatedLikes);
  };

  return (
    <>
      <Form />
      
      <section className="though-cards-container">
        {/* map thru the thoughts array to generate the thoughts cards */}
        {/* Send the necessary data to the Thoughts Cards component as props */}
        {thoughts.map((thought) => (
          <ThoughtsCard 
            key={thought._id}
            id={thought._id}
            message={thought.message}
            timeCreated={thought.createdAt}
            hearts={thought.hearts} 
            addLike={addLike} />
        ))}
      </section>
    </>
  )
};