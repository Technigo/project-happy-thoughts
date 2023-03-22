import React, { useState, useEffect } from 'react';
import Form from 'components/Form.js'
import Thoughts from 'components/Thoughts.js'
import Loading from 'components/Loading.js'

export const App = () => {
  const [text, setText] = useState('')
  const [loading, setLoading] = useState('')
  const [thoughts, setThoughts] = useState([])
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
    console.log(text)
    event.preventDefault()
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        message: text
      })
    }

    fetch('https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts', options)
      .then((response) => response.json())
      .then((newThought) => {
        setThoughts((previousThoughts) => [newThought, ...previousThoughts])
        console.log('test')
      })

    console.log(thoughts)
  }

  return (
    <div>
      <Form
        text={text}
        setText={setText}
        thoughts={thoughts}
        setThoughts={setThoughts}
        url={url}
        handleFormSubmit={handleFormSubmit} />
      {loading && (<Loading />)}
      {!loading && (<Thoughts thoughts={thoughts} />)}
    </div>

  );
}
