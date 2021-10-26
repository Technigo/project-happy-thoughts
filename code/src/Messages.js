import React, { useEffect, useState } from 'react'
import moment from 'moment'
import { API_URL } from 'urls'

export const Messages = ({ username }) => {
  const [thoughts, setThoughts] = useState([])

  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => setThoughts(data))
  }, [])

  return (
    <>
      {thoughts.map((thought) => (
        <div className='message-container' key={thought._id}>
          <p>{thought.message}</p>
          <div className='icon-container'>
            <div className='button-container'>
              <button className='like-button'>
                <span className='heart-icon' role='img' aria-label='heart-icon'>
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
    </>
  )
}
