/* eslint-disable no-underscore-dangle */
/* eslint-disable no-template-curly-in-string */
/* eslint-disable quote-props */
/* eslint-disable no-use-before-define */
import React, { useEffect, useState } from 'react';
import ThoughtList from './ThoughtList';
import ThoughtForm from './ThoughtForm';

const AllForm = () => {
  const [thoughtList, setThoughtList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [newThought, setNewThought] = useState('');

  useEffect(() => {
    fetchThought();
  }, []);

  /* first fetch of the list of post */
  const fetchThought = () => {
    setLoading(true);
    fetch('https://project-happy-thoughts-api-thr246hagq-lz.a.run.app/thoughts')
      .then((res) => res.json())
      .then((data) => setThoughtList(data))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }

  /* functions for all the changes that happen after input/like a post */

  /* handleNewThoughtChange allows us to write something in the text area */
  const handleNewThoughtChange = (event) => {
    setNewThought(event.target.value)
  }

  /* onFormSubmit allows us to click on the submit button
  and then it displays the whole recent thoughts */
  const onFormSubmit = (event) => {
    event.preventDefault()

    const option = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        // eslint-disable-next-line quotes
        message: newThought // message is the key in API
      })
    }
    fetch('https://project-happy-thoughts-api-thr246hagq-lz.a.run.app/thoughts', option)
      .then((res) => res.json())
      .then(() => fetchThought())
      .finally(() => setNewThought('')) // shows the new thought as it targets the value on the input you posted
  }

  /* onThoughtLikeChange allows us to fetch info of how much likes (or hearts) a post gets */
  const onThoughtLikeChange = (_id) => {
    const option = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      }
    }
    fetch(`https://project-happy-thoughts-api-thr246hagq-lz.a.run.app/thoughts/${_id}/hearts` /* 'https://project-happy-thoughts-api-thr246hagq-lz.a.run.app/thoughts/:_id/heart' */, option) // _id is the key in API
      .then((res) => res.json())
      .then(() => fetchThought()) // update the data, hence redoing the fetchThought
  }

  return (
    <div>
      <ThoughtForm
        newThought={newThought}
        onNewThoughtChange={handleNewThoughtChange}
        onFormSubmit={onFormSubmit} />
      <ThoughtList
        loading={loading}
        thoughtList={thoughtList}
        setThoughtList={setThoughtList}
        onThoughtLikeChange={onThoughtLikeChange} />
    </div>

  );
}

export default AllForm;
