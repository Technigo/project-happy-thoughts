import React, { useState, useEffect } from "react";

import ThoughtForm from "components/ThoughtForm";
import ThoughtList from "components/ThoughtList";

export const App = () => {
  const [thoughtList, setThoughtList] = useState([])
  const [newThought, setNewThought] = useState('')
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    getThought()
  }, [])

  const getThought = () => {
    setLoading(true);
    fetch('https://happy-thoughts-technigo.herokuapp.com/thoughts')
      .then(res => res.json())
      .then(data => setThoughtList(data))
      .catch(error => console.error(error))
      .finally(() => setLoading(false));
  }

  const onFormSubmit = (event) => {
    event.preventDefault()

    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ message: newThought }),
    }

    fetch('https://happy-thoughts-technigo.herokuapp.com/thoughts', options)
      .then((res) => res.json())
      .then(() => {
        getThought(setNewThought(""))
      })
  }

return (
  <div>
  <ThoughtForm 
  newThought={newThought}
  setNewThought={setNewThought}
  onFormSubmit={onFormSubmit}
  />
  <ThoughtList 
    thoughtList={thoughtList} 
    loading={loading}
  />
  </div>
)
}