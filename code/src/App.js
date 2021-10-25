import React, { useEffect, useState } from 'react'
import moment from 'moment'
import { API_URL } from 'urls'
import { Form } from 'Form'

export const App = ({ username }) => {
  const [thoughts, setThoughts] = useState([])

  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => setThoughts(data))
  }, [])

  return (
    <div className='container'>
      <div className='main'>
        <Form
          thoughts={thoughts}
          setThoughts={setThoughts}
          username={username}
        />

        {thoughts.map((thought) => (
          <div className='message-container' key={thought._id}>
            <p>{thought.message}</p>
            <div className='icon-container'>
              <div className='button-container'>
                <button className='like-button'>
                  <span
                    className='heart-icon'
                    role='img'
                    aria-label='heart-icon'
                  >
                    ❤️️
                  </span>{' '}
                </button>
                <p className='likes-number'>x {thought.hearts} </p>
              </div>
              <p>{username}</p>
              <p className='date'>{moment(thought.createdAt).fromNow()}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
