/* eslint-disable linebreak-style */
import React, { useState, useEffect } from 'react';

import HappyList from 'components/HappyList';
import NewThought from 'components/NewThought';

export const App = () => {
  const [happyList, setHappyList] = useState([]);
  const [newThought, setNewThought] = useState('');
  const [loading, setLoading] = useState(true);

  const fetchMessage = () => {
    fetch('https://project-happy-thoughts-api-4xuxefucaa-uc.a.run.app/thoughts')
      .then((result) => result.json())
      .then((json) => setHappyList(json))
      .catch((error) => console.error(error))
      .finally(() => {
        setLoading(false)
      })
  }

  useEffect(() => {
    fetchMessage();
  }, [newThought, happyList]);

  // will be triggered first when app starts

  const onNewThoughtChange = (event) => {
    setNewThought(event.target.value);
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
    // setLoading(true);
    fetch('https://project-happy-thoughts-api-4xuxefucaa-uc.a.run.app/thoughts', options)
      .then((res) => res.json())
      .then(() => fetchMessage())
      .catch((error) => console.error(error))
      .finally(() => setNewThought(''));
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
    fetch(`https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts/${_id}/like`, option) // _id is the key in API
      .then((res) => res.json())
      .then(() => fetchMessage())
  }

  return (
    <div className="outer-wrapper">
      <div className="inner-wrapper">
        <NewThought
          newThought={newThought}
          handleFormSubmit={handleFormSubmit}
          onNewThoughtChange={onNewThoughtChange} />
        <HappyList
          happyList={happyList}
          onGiveHeartChange={onGiveHeartChange} />
      </div>
    </div>
  );
}