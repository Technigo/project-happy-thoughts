import React, { useState, useEffect } from 'react';
import NewThought from 'components/NewThought'
import HappyThoughtTrain from 'components/HappyThoughtTrain'

export const App = () => {
  const [happyThoughtTrain, setHappyThoughtTrain] = useState([]);
  const [newThought, setNewThought] = useState('');
  const [loading, setLoading] = useState(true);

  const fetchMessage = () => {
    setLoading(false);
    fetch('https://project-happy-thoughts-api-zmlc5jjp5a-lz.a.run.app/thoughts')
      .then((response) => response.json())
      .then((data) => setHappyThoughtTrain(data.response))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    fetchMessage();
  }, [newThought, happyThoughtTrain]);

  const handleNewThoughtChange = (event) => {
    setNewThought(event.target.value)
  }

  const handleFormSubmit = (event) => {
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

    fetch('https://project-happy-thoughts-api-zmlc5jjp5a-lz.a.run.app/thoughts', options)
      .then((response) => response.json())
      .then(() => fetchMessage())
      .catch((error) => console.error(error))
      .finally(() => setNewThought(''))
  }
  if (loading) {
    return (
      <p>PAGE IS LOADING</p>
    )
  }
  const onGiveHeartChange = (_id) => {
    const option = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      }
    }
    fetch(`https://project-happy-thoughts-api-zmlc5jjp5a-lz.a.run.app/thoughts/${_id}/like`, option) // _id is the key in API
      .then((response) => response.json())
      .then(() => fetchMessage())
  }

  return (
    <>
      <header>
        <h1>Happy Thoughts</h1>
      </header>
      <div className="container">
        <NewThought
          newThought={newThought}
          handleNewThoughtChange={handleNewThoughtChange}
          handleFormSubmit={handleFormSubmit} />
        <HappyThoughtTrain
          happyThoughtTrain={happyThoughtTrain}
          onGiveHeartChange={onGiveHeartChange} />
      </div>
    </>
  )
}