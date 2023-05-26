import React, { useState, useEffect } from 'react';

import { HappyList } from './components/HappyList'
import { HappyForm } from './components/HappyForm'
import linkedin from './images/blacklinkedinicon.svg'
import './index.css';
import './reset.css';

// const FETCHAPI = 'https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts'

export const App = () => {
  const [loading, setLoading] = useState(false)
  const [happyList, setHappyList] = useState([])
  const [newThought, setNewThought] = useState('')

  useEffect(() => {
    setLoading(true);
    fetch('https://irupe-happy-thoughts-api-kobjwpkrba-lz.a.run.app/thoughts')
      .then((response) => response.json())
      .then((data) => {
        setHappyList(data.response);
        console.log(data); // Log the data received from the API
      })
      .catch((error) => console.log(error))
      .finally(() => setLoading(false));
  }, []);

  const handleFormSubmit = (event) => {
    console.log('form submitted');
    event.preventDefault()
    const options = {
      method: 'POST',
      body: JSON.stringify({ message: newThought }),
      headers: { 'Content-Type': 'application/json' }
    }
    fetch('https://irupe-happy-thoughts-api-kobjwpkrba-lz.a.run.app/thoughts', options)
      .then((response) => response.json())
      .then((data) => setHappyList([data.response, ...happyList]))
      .catch((error) => console.log(error))
      .finally(() => setNewThought(''));
  }

  return (
    <div>

      <main className="happy-container">
        <HappyForm
          newThought={newThought}
          setNewThought={setNewThought}
          handleFormSubmit={handleFormSubmit} />

        <HappyList
          loading={loading}
          happyList={happyList}
          setHappyList={setHappyList} />
      </main>
      <footer>
        <p>A website made by Movimiento © 2023 sudent @ Technigo </p>
        <div className="iconslinkedin">
          <a href="https://www.linkedin.com/in/irup%C3%A9-pozo-graviz-119112266/">
            <img src={linkedin} alt="button to linkedin black" />

          </a>
        </div>

      </footer>
    </div>

  );
}
