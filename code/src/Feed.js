/* eslint-disable no-underscore-dangle */
import React, { useState, useEffect } from 'react';
import { SendThoughtForm } from 'SendThoughtForm';
import { Thought } from 'Thought';
import { Header } from 'Header';

export const Feed = () => {
  const [thoughtsList, setThoughtsList] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [newThought, setNewThought] = useState('')
  const [myLikesCount, setMyLikesCount] = useState(0)

  const fetchThoughts = () => {
    fetch('https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts')
      .then((response) => response.json())
      .then((data) => setThoughtsList(data))
      .catch((error) => console.log(error))
      .finally(() => { setIsLoading(false) })
  }

  useEffect(() => {
    setIsLoading(true);
    setInterval(fetchThoughts(), 2000);
  }, []);

  const handleFormSubmit = (event) => {
    event.preventDefault()
    if (newThought.length < 5) {
      return alert('Please enter atleast 5 charcaters.')
    } else {
      fetch('https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: newThought })
      })
        .then(() => fetchThoughts())
        .catch((error) => console.log(error))
    }
  }

  return (
    <div>
      <Header myLikesCount={myLikesCount} />
      <SendThoughtForm
        onNewThoughtChange={(event) => {
          setNewThought(event.target.value)
        }}
        characterCounter={140 - newThought.length}
        handleFormSubmit={handleFormSubmit} />

      {!isLoading && thoughtsList.map((thought) => {
        const handleLikeSubmit = () => {
          fetch(`https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts/${thought._id}/like`, {
            method: 'POST'
          })
            .then(() => localStorage.getItem(myLikesCount))
            .then(() => localStorage.setItem(setMyLikesCount(myLikesCount + 1)))
            .then(() => fetchThoughts())
            .catch((error) => console.log(error))
        }
        return (
          <Thought
            key={thought._id}
            thoughtMessage={thought.message}
            timeStamp={thought.createdAt}
            handleLikeSubmit={handleLikeSubmit}
            likesCounter={thought.hearts} />
        )
      })}
      {isLoading && (<h2>Loading happy thoughts...</h2>)}
    </div>
  );
}
