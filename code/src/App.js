import React, { useState, useEffect } from 'react';

import { HappyList } from './components/HappyList'
import { HappyForm } from './components/HappyForm'
import linkedin from './images/blacklinkedinicon.svg'
import './index.css';
import './reset.css';

const FETCHAPI = 'https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts'

export const App = () => {
  const [loading, setLoading] = useState(false)
  const [happyList, setHappyList] = useState([])
  const [newThought, setNewThought] = useState('')
  const [onAddNewThought] = useState('')

  const fetchThoughts = () => {
    fetch(FETCHAPI)
      .then((response) => response.json())
      .then((data) => setHappyList(data))
      .catch((error) => console.log(error))
      .finally(() => { setLoading(false) })
  }
  useEffect(() => {
    fetchThoughts()
  }, [])

  /* posting new post to API */

  const handleFormSubmit = (event) => {
    event.preventDefault()

    fetch(FETCHAPI, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ message: newThought })
    })
      .then((res) => res.json())
      .then(() => {
        fetchThoughts()
        setNewThought('')
      })
  }

  return (
    <div>
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
      <footer>
        <p>A website made by Movimiento © 2023</p>
        <div className="iconslinkedin">
          <a href="https://www.linkedin.com/in/irup%C3%A9-pozo-graviz-119112266/">
            <img src={linkedin} alt="button to linkedin black" />

          </a>
        </div>

      </footer>
    </div>

  );
}

// https://happy-thoughts-ux7hkzgmwa-uc.a.run.app

/* useEffect(() => {
    setLoading(true);
    fetch('https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts')
      .then((response) => response.json())
      .then((data) => setHappyList(data))
      .catch((error) => console.log(error))
      .finally(() => { setLoading(false) })
  }, [])

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
      .catch((error) => console.log(error))
      .finally(() => setNewThought(''));
  } */