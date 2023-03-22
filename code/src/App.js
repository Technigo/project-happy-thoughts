import React, { useState, useEffect } from 'react';

import { HappyList } from './components/HappyList'
import { HappyForm } from './components/HappyForm'

export const App = () => {
  const [loading, setLoading] = useState(false)
  const [happyList, setHappyList] = useState([])
  const [newThought, setNewThought] = useState('')

  useEffect(() => {
    setLoading(true);
    fetch('https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts')
      .then((res) => res.json())
      .then((data) => setHappyList(data))
      .catch((error) => console.erroe(error))
      .finally(() => setLoading(false))
  }, []);
  const onAddNewThought = (event) => {
    setNewThought(event.target.value)
  }
  const onFormSubmit = (event) => {
    event.preventDefault();
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ description: newThought })
    }
    fetch('https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts', options)
      .then((res) => res.json())
      .then(() => setHappyList)
      .finally(() => setNewThought(''));
  }

  return (
    <div>
      <HappyForm
        newThought={newThought}
        onAddNewThought={onAddNewThought}
        onFormSubmit={onFormSubmit} />

      <HappyList
        loading={loading}
        happyList={happyList}
        setHappyList={setHappyList} />
    </div>
  );
}

// https://happy-thoughts-ux7hkzgmwa-uc.a.run.app