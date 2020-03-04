/* eslint-disable linebreak-style */
import React, { useEffect, useState } from 'react';
import moment from 'moment'
import { HappyThought } from './components/HappyThought';
import { HappyForm } from './components/HappyForm';

const url = 'https://joacims-happy-thoughts.herokuapp.com/';

export const App = () => {
  const [thoughts, setThoughts] = useState([])
  const [postedMessage, setPostedMessage] = useState('')

  useEffect(() => {
    fetch(url)
      .then(res => res.json())
			.then(json => setThoughts(json))
			.then(json => setPostedMessage(Date.now()))
  }, [])

  const onLiked = (thoughtId) => {
    const updatedThoughts = thoughts.map((thought) => {
      if (thought._id === thoughtId) {
        thought.likes += 1
      }
      return thought;
    })
    setThoughts(updatedThoughts);
  }

  return (
    <main>
      <HappyForm />
      {thoughts.map((thought) => (
        <HappyThought key={thought._id} thought={thought} onLiked={onLiked} />
      ))}
			<p>{moment(postedMessage).fromNow()}</p>
    </main>
  );
};
