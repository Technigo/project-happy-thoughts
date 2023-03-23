/* eslint-disable no-underscore-dangle */
import React, { useState, useEffect } from 'react';
import { ThoughtsOutput } from 'components/ThoughsOutput';
import { ThoughtsInput } from 'components/ThoughtsInput';

export const App = () => {
  const [thoughtList, setThoughtList] = useState([])
  const [loading, setLoading] = useState(false)
  const submitHandler = (message) => {
    if (message.length >= 5 || message.length <= 140) {
      fetch('https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts', {
        method: 'POST',
        body: JSON.stringify({ message }),
        headers: { 'Content-Type': 'application/json' }
      }).then((response) => response.json()).then((data) => {
        setThoughtList((pv) => [data, ...pv])
      })
    } else {
      alert('make sure the input is between 5-140 characters long')
    }
  }
  /* Loads the 20 most recent happy thoughts from the API */
  useEffect(() => {
    setLoading(true);
    fetch('https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts')
      .then((response) => response.json())
      .then((data) => setThoughtList(data))
      .catch((error) => console.log(error))
      .finally(() => { setLoading(false) })
  }, []);
  return (
    <div className="main-container">
      <ThoughtsInput submitHandler={submitHandler} />
      {!loading && ThoughtsOutput(thoughtList)}
      {loading && (<h2>LOADING</h2>)}
    </div>
  );
}