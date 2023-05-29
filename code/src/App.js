/* eslint-disable no-underscore-dangle */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { SubmitThoughts } from 'components/SubmitThoughts';
import { ListThoughts } from 'components/ListThoughts';

export const App = () => {
  const [thoughtsList, setThoughtsList] = useState([])
  const [submitThoughts, setSubmitThoughts] = useState('')
  const [loading, setLoading] = useState(false)

  const fetchThoughts = () => {
    setLoading(true)
    fetch('https://project-happy-thoughts-api-l8j3.onrender.com/thoughts')
      .then((response) => response.json())
      .then((data) => setThoughtsList(data.response))
      .catch((error) => console.log(error))
      .finally(() => { setLoading(false) })
  }

  useEffect(() => {
    fetchThoughts()
  }, [])

  const handleThoughtChange = (event) => {
    setSubmitThoughts(event.target.value)
  }

  const handleFormSubmit = (event) => {
    event.preventDefault()
    setLoading(true)

    const options = {
      method: 'POST',
      body: JSON.stringify({ message: submitThoughts }),
      headers: { 'Content-Type': 'application/json' }
    }
    fetch('https://project-happy-thoughts-api-l8j3.onrender.com/thoughts', options)
      .then((response) => response.json())
      .then((data) => { setThoughtsList([data.response, ...thoughtsList]) })
      .catch((error) => console.log(error))
      .finally(() => { setLoading(false); setSubmitThoughts('') })
  }

  const handleLikeChange = (thoughtId) => {
    const options = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' }
    }
    fetch(`https://project-happy-thoughts-api-l8j3.onrender.com/thoughts/${thoughtId}/like`, options)
      .then((response) => response.json())
      .catch((error) => console.log(error))
      .finally(() => fetchThoughts(''))
  }

  return (
    <section className="mainBody">
      <SubmitThoughts
        submitThoughts={submitThoughts}
        handleThoughtChange={handleThoughtChange}
        handleFormSubmit={handleFormSubmit} />
      <ListThoughts
        loading={loading}
        thoughtsList={thoughtsList}
        handleLikeChange={handleLikeChange} />
    </section>
  );
}