import React, { useState, useEffect } from 'react';

import { ThoughtsList } from 'components/ThoughtsList';
import { ThoughtForm } from 'components/ThoughtForm';
import { Header } from 'components/Header';
import { Footer } from 'components/Footer';
import { ThoughtsUrl } from 'Urls';

export const App = () => {
  
  //State hooks for thoughts, starting out with an empty array
  const [thoughts, setThoughts] = useState([]);
  
  useEffect(() => { // Adding use effect hook to control the fetch of happy thoughts from API
    fetchThoughts();
  }, []); /* Second argument is an empty array, to prevent the fetchThoughts function from happening again and again as soon App is mounted, 
          we only want it to execute when the state changes, which we will control in the postThoughts function further down */

  // Fetching happy thoughts from the API
  const fetchThoughts = () => {
    fetch(ThoughtsUrl)
      .then(results => results.json())
      .then(data => setThoughts(data))   
  };

  // Posting a new happy thought to the API
  const postThoughts = (newThought) => {
    fetch(ThoughtsUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json'},
      body: JSON.stringify({ message: newThought })
    })
    .then(() => fetchThoughts()) /* Excecute fetch thoughts again based on the changes in API */
  };
  
  //Function for updating hearts/number of likes
  const updateLikes = (thoughtId) => {
    const updatedThoughts = thoughts.map(thought => {
      if (thought._id === thoughtId) {
        thought.hearts += 1;
      }
      return thought;
    })
    setThoughts(updatedThoughts) // The state is changed with the updated thoughts, based on new number of likes
  };

  // Post likes to the API
  const onLike = (thoughtId) => {
    fetch(`https://happy-thoughts-technigo.herokuapp.com/thoughts/${thoughtId}/like`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json'},
      body: ''
    }).then(() => updateLikes(thoughtId))
  };
  
  return (
    <main className='main'>
      <Header />
      <div className='thoughts-container'>
      <ThoughtForm onThoughtChange={postThoughts}/>
        { /* Mapping over the array with thoughts returned from the API, 
        returning the article from ThoughtsList with id, content and likes for each new thought */
        thoughts.map(thought => (
          <ThoughtsList key={thought._id} thought={thought} onLike={onLike}/>
        ))}
      </div>
      <Footer />
    </main>
  );
}; 