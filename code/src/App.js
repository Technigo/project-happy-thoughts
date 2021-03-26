import React, { useState, useEffect } from 'react'
import moment from 'moment'

import { API_URL, LIKES_URL } from './reusable/urls'

export const App = () => {
  const [thoughtList, setThoughtList] = useState ([])
  const [newThought, setNewThought] = useState('')

  useEffect(() => {
    fetchThoughtList()
  }, [])

  const fetchThoughtList = () => {
    fetch (API_URL)
      .then(res => res.json())
      .then(thoughts => setThoughtList(thoughts))
      .catch(error => console.error(error))
  }

  // happy thoughts //
  //here is something going wrong
  const onNewThoughtChange = (e) => {
    setNewThought(e.target.value);
  }
  const onSubmitThought = (e) => {
    e.preventDefault()

    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ text: newThought })
    };

    fetch(API_URL, options)
      .then(res => res.json())
      .then(receivedThought => setThoughtList([receivedThought, ...thoughtList]))
      .catch(err => console.error(err))
  }

// likes //
  const onLikesIncrease = (id) => {
      const options = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
      };

      fetch(LIKES_URL(id), options)
        .then(res => res.json())
        .then(receivedThought => {
          const updatedThoughtList = thoughtList.map(thought => {
              return thought
          })
          setThoughtList(updatedThoughtList)
        })
        .catch(err => console.error(err))
  }

  console.log(thoughtList)

  return (
    <>
      <form onSubmit={onSubmitThought}>
        <label htmlFor="newThought"></label>
        <input
          id="newThought"
          type="text"
          value={newThought}
          onChange={onNewThoughtChange}
          placeholder="type here"
        /> 
        <button type="submit">send</button> 
      </form>
      {thoughtList.map(thought => (
        <div key={thought._id}>
          <h4>{thought.message}</h4>
            <button onClick={() => onLikesIncrease(thought._id)}>
              {thought.hearts}
              ❤️
            </button>
          <p className="time">{moment(thought.createdAt).fromNow()}</p>
        </div>
      ))}
    </>
  )
}