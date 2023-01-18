import React, { useState, useEffect } from 'react';

import ThoughtsForm from 'components/ThoughtsForm';
import Thoughts from 'components/Thoughts';
// import Components from 'eslint-plugin-react/lib/util/Components';

export const App = () => {
  const [thoughts, setThoughts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [newThought, setNewThought] = useState('');

  // This function fetches 20 objects ('thoughts') from the HappyThoughts API and stores the
  // array in setThoughts/thoughts, which initially starts as an empty array
  const fetchThoughts = () => {
    console.log('fetchThoughts invoked')
    setLoading(true);
    fetch('https://project-happy-thoughts-api-oqoo5bxyya-lz.a.run.app/thoughts')
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
    console.log('handleFormSubmit invoked')
    event.preventDefault();
    fetch(
      'https://project-happy-thoughts-api-oqoo5bxyya-lz.a.run.app/thoughts',
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
  // It sends an empty POST request to the API,
  // which adds one 'heart' to the associated thought.
  const handleNewLikeSubmit = (_id) => {
    console.log('handleNewLikeSubmit invoked')
    fetch(
      `https://project-happy-thoughts-api-oqoo5bxyya-lz.a.run.app/thoughts/${_id}/hearts`,
      { method: 'POST',
        headers: { 'Content-Type': 'application/json' } }
    )
      .then((res) => res.json())
      .then((data) => {
        // eslint-disable-next-line no-underscore-dangle
        fetchThoughts(data._id)
      })
  };

  // Finally, we have the actual components: ThoughtsForm and Thoughts, each with 3 props.
  // ThoughtsForm props:
  // **newThought**: starts as an empty string, updated via onNewThoughtChange
  // **onFormSubmit**: on clicking the button, invokes the handleFormSubmit function
  // **onNewThoughtChange**: any new input in the form invokes the handleNewThoughtChange function
  // Thoughts props:
  // **loading**: adds 'Happy thoughts incoming' notifier when state is set to true (fetchThoughts)
  // **thoughts**: latest 20 'thought' objects loaded from the API
  // **onNewLikeSubmit**: on clicking the button, invokes the handleNewLikeSubmit function
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