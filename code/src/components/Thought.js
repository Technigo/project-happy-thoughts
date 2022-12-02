import React, { useState, useEffect } from 'react';

import { ListOfThoughts } from 'components/ListOfThoughts';
import { ThoughtForm } from 'components/ThoughtForm';

export const Thought = () => {
  const [listOfThoughts, setListOfThoughts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [newThought, setNewThought] = useState('');

  /* first fetch  */
  const fetchThought = () => {
    setLoading(true);
    // 1 ändra url
    fetch('https://happy-thoughts-technigo.herokuapp.com/thoughts')
      .then((res) => res.json())
      .then((data) => setListOfThoughts(data))
      .catch((error) => console.error(error))
      .then(console.log('everything works'))
      .finally(() => setLoading(false));
  }

  useEffect(() => {
    // eslint-disable-next-line no-use-before-define
    fetchThought();
  }, []);

  /* functions for all the changes that happen after input/like a post */

  const handleNewThoughtChange = (event) => {
    setNewThought(event.target.value)
  }
  const onFormSubmit = (event) => {
    event.preventDefault();

    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        message: newThought
      })
    }
    // 2 ändra url
    fetch('https://happy-thoughts-technigo.herokuapp.com/thoughts', options)
      .then((res) => res.json())
      .then(() => fetchThought())
      .finally(() => setNewThought(''));
  }
  const onThoughtLikeChange = (_id) => {
    const option = {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      }
    }
    // 3 ändra url
    fetch(`https://happy-thoughts-technigo.herokuapp.com/thoughts/${_id}/like`, option) // _id is the key in API
      .then((res) => res.json())
      .then(console.log('likes work'))
      .catch((error) => console.error(error))
      .then(() => fetchThought()) // update the data, hence redoing the fetchThought
  }

  return (
    <div>
      <ThoughtForm
        newThought={newThought}
        onNewThoughtChange={handleNewThoughtChange}
        onFormSubmit={onFormSubmit} />
      <ListOfThoughts
        loading={loading}
        listOfThoughts={listOfThoughts}
        setListOfThoughts={setListOfThoughts}
        onThoughtLikeChange={onThoughtLikeChange} />
    </div>
  );
}
