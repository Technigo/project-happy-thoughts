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
  const [errorMsg, setErrorMsg] = useState(false)
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
  console.log(errorMsg)
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
    if (newThought.length > 4) {
      fetch('https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts', options)
        .then((response) => response.json())
        .then(() => { fetchThoughts() })
        .catch((error) => console.error(error))
        .finally(() => {
          setNewThought('')
        })
      setErrorMsg(false);
    } else if (newThought.length < 5) {
      setErrorMsg(true);
    }

    console.log(thoughts)
  }

  const handleLike = (
    currentThoughtID,
    currentThoughtHearts,
    currentThought,
    setCurrentThought
  ) => {
    setCurrentThought({ currentThought, hearts: currentThoughtHearts + 1 });
    setCountLikes(countLikes + 1)
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
        setCharacters={setCharacters}
        errorMsg={errorMsg} />
      {loading && (<Loading />)}
      {!loading && (
        <Thoughts
          thoughts={thoughts}
          handleLike={handleLike}
          url={url} />
      )}
    </div>

  );
}
