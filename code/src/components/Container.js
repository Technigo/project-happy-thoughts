import React, { useState, useEffect } from 'react';
import HappyThoughts from './HappyThoughts';
import HappyThoughtsForm from './HappyThoughtsForm';

const Container = () => {
  const [loading, setLoading] = useState(false);
  const [happyThoughts, setHappyThoughts] = useState([]);
  const [newHappyThought, setNewHappyThought] = useState('');

  useEffect(() => {
    fetchHappyThoughts();
  }, []);

  const fetchHappyThoughts = () => {
    setLoading(true);
    fetch('https://api-happy-tweets.herokuapp.com/thoughts')
      .then((res) => res.json())
      .then((data) => setHappyThoughts(data.response))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
  };

  const handleNewThoughtChange = (event) => {
    setNewHappyThought(event.target.value)
  };

  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      message: newHappyThought
    })
  };

  fetch('https://api-happy-tweets.herokuapp.com/thoughts', options)
    .then((res) => res.json())
    .then(() => fetchHappyThoughts())
    .finally(() => setNewHappyThought(''));
}
const handleNewLikeSubmit = (_id) => {
  const options = {
    method:'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      message: newHappyThought
    })
  };

  fetch(`https://api-happy-tweets.herokuapp.com/thoughts/${_id}/like`, options)
    .then((res) => res.json())
    .then((data) => {
    // eslint-disable-next-line no-underscore-dangle
      fetchHappyThoughts(data.response._id)
    })

  return (
    <div>
      <HappyThoughtsForm
        newHappyThought={newHappyThought}
        onFormSubmit={handleFormSubmit}
        onNewThoughtChange={handleNewThoughtChange} />
      <HappyThoughts
        loading={loading}
        happyThoughts={happyThoughts}
        onNewLikeSubmit={handleNewLikeSubmit} />
    </div>
  )
};
export default Container;