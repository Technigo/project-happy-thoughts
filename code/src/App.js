import React, { useState, useEffect } from 'react';

import { HappyList } from './components/HappyList'
import { HappyForm } from './components/HappyForm'
import './index.css';
import './reset.css';

export const App = () => {
  const [loading, setLoading] = useState(false)
  const [happyList, setHappyList] = useState([])
  const [newThought, setNewThought] = useState('')

  useEffect(() => {
    setLoading(true);
    fetch('https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts')
      .then((response) => response.json())
      .then((data) => setHappyList(data))
      .catch((error) => console.log(error))
      .finally(() => { setLoading(false) })
  }, [])

  /* posting new post to API */
  const onAddNewThought = (event) => {
    setNewThought(event.target.value)
  }

  const handleFormSubmit = (event) => {
    event.preventDefault()
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ thought: newThought })
    }
    fetch('https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts', options)
      .then((response) => response.json())
      .then((data) => setHappyList(data))
      .finally(() => setNewThought(''));
  }
  return (
    <div className="happy-container">
      <HappyForm
        newThought={newThought}
        onAddNewThought={onAddNewThought}
        handleFormSubmit={handleFormSubmit} />

      <HappyList
        loading={loading}
        happyList={happyList}
        setHappyList={setHappyList} />
    </div>
  );
}

// https://happy-thoughts-ux7hkzgmwa-uc.a.run.app