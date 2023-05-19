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
  const [username, setUsername] = useState('')

  const fetchThoughts = () => {
    fetch('https://project-happy-thoughts-api-zrwa4mpyyq-lz.a.run.app/thoughts')
      .then((response) => response.json())
      .then((data) => setThoughtsList(data.response))
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
      fetch('https://project-happy-thoughts-api-zrwa4mpyyq-lz.a.run.app/thoughts', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: newThought, username })
      })
        .then(() => fetchThoughts())
        .catch((error) => console.log(error))
    }
  }

  const onUsernameChange = (event) => {
    setUsername(event.target.value)
    console.log(username)
  }

  const handleEnterKey = (event) => {
    if (event.KeyCode === 13) {
      handleFormSubmit();
    }
  };

  return (
    <div>
      <Header myLikesCount={myLikesCount} />
      <SendThoughtForm
        onNewThoughtChange={(event) => {
          setNewThought(event.target.value)
        }}
        characterCounter={140 - newThought.length}
        handleFormSubmit={handleFormSubmit}
        onUsernameChange={onUsernameChange}
        handleEnterKey={handleEnterKey} />

      {!isLoading && thoughtsList.map((thought) => {
        const handleLikeSubmit = () => {
          fetch(`https://project-happy-thoughts-api-zrwa4mpyyq-lz.a.run.app/thoughts/${thought._id}/like`, {
            method: 'PATCH'
          })
            .then(() => setMyLikesCount(myLikesCount + 1))
            .then(() => fetchThoughts())
            .catch((error) => console.log(error))
        }

        return (
          <Thought
            key={thought._id}
            thoughtMessage={thought.message}
            timeStamp={thought.createdAt}
            handleLikeSubmit={handleLikeSubmit}
            likesCounter={thought.hearts}
            username={thought.username} />
        )
      })}
      {isLoading && (<h2>Loading happy thoughts...</h2>)}
    </div>
  );
}
