import React, { useState, useEffect } from 'react';
import ThoughtList from 'components/ThoughtList';
import ThoughtForm from 'components/ThoughtForm';

export const App = () => {
  const [thoughtList, setThoughtList] = useState([]);
  const [newThought, setNewThought] = useState('');

  /* Fetching data from API */
  const fetchData = () => {
    fetch('https://happy-thoughts-technigo.herokuapp.com/thoughts')
      .then((data) => data.json())
      .then((transformedData) => setThoughtList(transformedData))
      .catch((error) => console.error(error))
      .finally(() => console.log('everything is fine in fetch'));
  }
  useEffect(() => {
    fetchData();
  }, []);

  /* posting new post to API */
  const onNewThoughtChange = (event) => {
    setNewThought(event.target.value)
  }

  const handleFormSubmit = (event) => {
    event.preventDefault()

    const options = {
      method: 'POST',
      body: JSON.stringify({
        message: newThought
      }),
      headers: {
        'Content-Type': 'application/json'
      }

    }
    fetch('https://happy-thoughts-technigo.herokuapp.com/thoughts', options)
      .then((data) => data.json())
      .then(() => fetchData())
      .catch((error) => console.error(error))
      .finally(() => setNewThought(''));
  }

  /* post data for like button */

  const handleLikesChange = (id) => {
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      }
    }
    fetch(`https://happy-thoughts-technigo.herokuapp.com/thoughts/${id}/like`, options)
      .then((data) => data.json())
      .then(console.log('jupi'))
      .catch((error) => console.error(error))
      .finally(() => fetchData());
  }

  return (
    <div className="wrapper">
      <ThoughtForm
        handleFormSubmit={handleFormSubmit}
        newThought={newThought}
        onNewThoughtChange={onNewThoughtChange} />
      <ThoughtList
        thought={thoughtList}
        handleLikesChange={handleLikesChange} />
    </div>
  )
}
