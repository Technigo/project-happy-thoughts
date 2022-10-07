import React, { useState, useEffect } from 'react';

import ThoughtsForm from 'components/ThoughtsForm';
import Thoughts from 'components/Thoughts';

export const App = () => {
  const [thoughts, setThoughts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [newThought, setNewThought] = useState('');

  // This function fetches thoughts from the HappyTweets API and stores the API's
  // response array in setThoughts
  const fetchThoughts = () => {
    console.log('fetchThoughts invoked')
    setLoading(true);
    fetch('https://happy-thoughts-technigo.herokuapp.com/thoughts')
      .then((res) => res.json())
      .then((data) => setThoughts(data))
      .catch((error) => console.error(error))
      .finally(() => setLoading(''));
  };

  // Whenever App.js mounted/unmounted, the useEffect hook below
  // will invoke the fetchThoughts function as a 'side-effect'.
  // I've inserted an empty array as a dependency to ensure it only runs once,
  // i.e. when the component is mounted.
  useEffect(() => {
    console.log('useEffect for fetchThoughts invoked')
    fetchThoughts();
  }, []);

  // Whatever the user enters in the textarea field in ThoughtsForm.js will be set as NewThought.
  const handleNewThoughtChange = (event) => {
    console.log('handleNewThoughtChange invoked')
    setNewThought(event.target.value)
  };

  // This function posts the newThought as set above. It runs as follows:
  // 1) prevents the default action (submitting the form in ThoughtsForm.js)
  // 2) uses the POST method to post the newThought to the API array in a readable format
  // 3) invokes the fetchThoughts function
  // 4) clears setNewThought to an empty string again
  const handleFormSubmit = (event) => {
    event.preventDefault();
    fetch(
      'https://happy-thoughts-technigo.herokuapp.com/thoughts',
      { method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: newThought
        }) }
    )
      .then((res) => res.json())
      .then(() => fetchThoughts())
      .finally(() => setNewThought(''));
  };

  // This function is invoked on clicking a heart button.

  const handleNewLikeSubmit = (_id) => {
    fetch(
      `https://happy-thoughts-technigo.herokuapp.com/thoughts/${_id}/like`,
      { method: 'POST',
        headers: { 'Content-Type': 'application/json' } }
    )
      .then((res) => res.json())
      .then((data) => {
        // eslint-disable-next-line no-underscore-dangle
        fetchThoughts(data._id)
      })
  };

  return (
    <div>
      <ThoughtsForm
        newThought={newThought}
        onFormSubmit={handleFormSubmit}
        onNewThoughtChange={handleNewThoughtChange} />
      <Thoughts
        loading={loading}
        thoughts={thoughts}
        onNewLikeSubmit={handleNewLikeSubmit} />
    </div>
  )
};