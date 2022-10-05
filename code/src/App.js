import React, { useState, useEffect } from 'react';
import ThoughtsFeed from 'components/ThoughtsFeed';
import Form from 'components/Form';

export const App = () => {
  const [thoughts, setThoughts] = useState([])
  const [newThought, setNewThought] = useState('')

  // create promise
  const fetchThoughts = () => {
    fetch('https://happy-thoughts-technigo.herokuapp.com/thoughts')
      .then((data) => data.json())
      .then((transformedData) => setThoughts(transformedData))
      .catch((error) => console.error(error))
      .finally(() => console.log('all the promises are resolved'))
  }
  useEffect(() => {
    fetchThoughts();
  }, []);

  const handleNewThoughtChange = ((event) => {
    setNewThought(event.target.value)
  })

  const handleSubmit = ((event) => {
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
    fetch('https://happy-thoughts-technigo.herokuapp.com/thoughts', options)
      .then((res) => res.json())
      .then((lastThought) => setThoughts((previousThoughts) => [lastThought, ...previousThoughts]))
      .finally(() => setNewThought(''));
  })
  console.log(thoughts)

  return (
    <div className="outer-wrapper">
      <Form
        onFormSubmit={handleSubmit}
        newThought={newThought}
        onNewThoughtChange={handleNewThoughtChange} />
      <ThoughtsFeed list={thoughts} />
    </div>
  );
}
