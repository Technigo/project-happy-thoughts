import React, { useState, useEffect } from 'react';
import { ThoughtsList } from 'components/ThoughtsList';

export const App = () => {
  const [newThought, setNewThought] = useState('');
  // because a new thought has no value and then changes state to having a value

  const [thoughtsList, setThoughtsList] = useState([]);
  // because the Thoughts List changes state when a new thought is added

  // const [onNewThoughtChange, setOnNewThoughtChange] = useState(false); -
  // is this the same as the thoughtsList changing state?

  const fetchThoughts = () => {
    fetch('https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts')
    // this first one to fetch, and the second one, to post?
      .then((res) => res.json())
      .then((data) => setThoughtsList(data))
      .catch((error) => console.error(error))
      // .finally(() => setLoading(false));
  }

  useEffect(() => {
    fetchThoughts();
  // we want to fetch the most recent thoughts as a side effect
  // every time the page is mounted/reloaded - so we use an empty array as a dependency
  }, []);

  const handleNewThoughtChange = (event) => {
    setNewThought(event.target.value)
  }

  // const onFormSubmit = (event) = {
  //   event.preventDefault();
  // }
  // To stop the default behaviour of a form submission leading to page being refreshed or 
  // navigating to a new URL

  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      description: newThought
    })
  }

  fetch('https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts', options)
    .then((res) => res.json())
    .then(() => fetchThoughts())
    .finally(() => setNewThoughts(''));

  return (
    <div>
      <ThoughtsList />
    </div>
  )
}
