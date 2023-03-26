/* eslint-disable no-underscore-dangle */
import React, { useState, useEffect } from 'react';
import { formatDistance } from 'date-fns';
import { ThoughtForm } from './ThoughtForm';

const API = 'https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts'

export const ThoughtFeed = () => {
  const [thoughtList, setThoughtList] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  const fetchThoughts = () => {
    fetch(`${API}`)
      .then((response) => response.json())
      .then((data) => setThoughtList(data))
      .catch((error) => console.log(error))
      .finally(() => { setIsLoading(false) })
  }

  useEffect(() => {
    fetchThoughts();
  }, []);

  const HandleLikes = (thoughtId) => {
    fetch(`${API}/${thoughtId}/like`, { method: 'POST' })
      .then((response) => response.json())
      .then((data) => {
        const changeLikeCount = thoughtList.map((like) => {
          if (like._id === data._id) {
            like.hearts += 1
            return like
          } else { return like }
        })
        setThoughtList(changeLikeCount)
      })
  };

  return (
    <>
      <section className="form-container">
        <ThoughtForm />
      </section>
      <section className="feed-container">
        {!isLoading && thoughtList.map((thought) => {
          return (
            <div key={thought._id} className="card">
              <p>{thought.message}</p>
              <div className="card-details">
                <div>
                  <button type="button" className={`heart-button ${thought.hearts === 0 ? 'heart-active' : ''}`} onClick={() => HandleLikes(thought._id)}>
                    <span role="img" aria-label="Like post">❤️</span>
                  </button>
                  <span className="total-hearts">x {thought.hearts}</span>
                </div>
                <p className="date"> {formatDistance(new Date(thought.createdAt), Date.now(), { addSuffix: true })}</p>
              </div>
            </div>
          )
        })}
      </section>
      {isLoading && (<p>Loading in progress...</p>)}
    </>
  )
}

