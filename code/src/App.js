import React, { useState, useEffect } from 'react';
import Form from 'components/Form.js'
import Thoughts from 'components/Thoughts.js'
import Loading from 'components/Loading.js'

export const App = () => {
  const [newThought, setNewThought] = useState('')
  const [loading, setLoading] = useState(true)
  const [thoughts, setThoughts] = useState([])
  const [countLikes, setCountLikes] = useState(0)
  const [characters, setCharacters] = useState(0)
  const url = 'https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts'

  const fetchThoughts = () => {
    setLoading(true);
    fetch(url)
      .then((response) => response.json())
      .then((data) => setThoughts(data))
      .catch((error) => console.log(error))
      .finally(() => { setLoading(false) })
  }
  useEffect(() => {
    fetchThoughts()
  }, [])

  const handleFormSubmit = (event) => {
    console.log(newThought)
    event.preventDefault()
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        message: newThought
      })
    }

    fetch('https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts', options)
      .then((response) => response.json())
      // .then((newThoughts) => {
      //   setThoughts([newThoughts, ...thoughts])
      // })
      .then(() => { fetchThoughts() })
      .catch((error) => console.error(error))
      .finally(() => {
        setNewThought('')
      })
    console.log(thoughts)
  }

  const handleLike = (
    currentThoughtID,
    currentThoughtHearts,
    currentThought,
    setCurrentThought,
    setWobble
  ) => {
    setCurrentThought({ currentThought, hearts: currentThoughtHearts + 1 });
    setWobble(1)
    setCountLikes(countLikes + 1)
    console.log(countLikes)
    const options = { method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      } }

    fetch(`${url}/${currentThoughtID}/like`, options)
      .then((response) => response.json())
      .catch((error) => console.error(error))
      .finally(() => { setLoading(false) })
  }

  return (
    <div className="container">
      <Form
        newThought={newThought}
        setNewThought={setNewThought}
        thoughts={thoughts}
        setThoughts={setThoughts}
        url={url}
        handleFormSubmit={handleFormSubmit}
        countLikes={countLikes}
        characters={characters}
        setCharacters={setCharacters} />
      {loading && (<Loading />)}
      {!loading && (
        <Thoughts thoughts={thoughts} handleLike={handleLike} url={url} />
      )}
    </div>

  );
}
