/* eslint-disable no-underscore-dangle */
import React, { useState, useEffect } from 'react';
import { SendThoughtForm } from 'SendThoughtForm';
import { Thought } from 'Thought';

export const Feed = () => {
  const [thoughtList, setThoughtList] = useState([])
  const [loading, setLoading] = useState(false)

  const fetchThoughts = () => {
    setLoading(true);
    fetch('https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts')
      .then((response) => response.json())
      .then((data) => setThoughtList(data))
      .catch((error) => console.log(error))
      .finally(() => { setLoading(false) })
  }

  useEffect(() => {
    fetchThoughts()
  }, []);

  return (
    <div>
      <SendThoughtForm />
      <h1>Somethingsomething title here</h1>
      {!loading && thoughtList.map((thought) => {
        console.log('each thought', thought)
        return (
          <Thought
            key={thought._id}
            thoughtMessage={thought.message}
            timeStamp={thought.createdAt} />
        )
      })}
      {loading && (<h2>LOADING</h2>)}
    </div>
  );
}

