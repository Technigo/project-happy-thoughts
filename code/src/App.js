/* eslint-disable no-underscore-dangle */
import React, { useState, useEffect } from 'react';
import { SendThoughtForm } from 'SendThoughtForm';

export const App = () => {
  const [thoughtList, setThoughtList] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true);
    fetch('https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts')
      .then((response) => response.json())
      .then((data) => setThoughtList(data))
      .catch((error) => console.log(error))
      .finally(() => { setLoading(false) })
  }, []);

  return (
    <div>
      <SendThoughtForm />
      <h1>Somethingsomething title here</h1>
      {!loading && thoughtList.map((thought) => {
        return (<p key={thought._id}>{thought.message}</p>)
      })}
      {loading && (<h2>LOADING</h2>)}
    </div>
  );
}