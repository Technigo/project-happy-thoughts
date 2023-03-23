/* eslint-disable no-underscore-dangle */
import React, { useState, useEffect } from 'react';
import '../index.css';
import './ThoughtsList.css';

export const ThoughtsList = () => {
  const [thoughtsList, setThoughtsList] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch('https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts')
      .then((response) => response.json())
      .then((data) => setThoughtsList(data))
      .catch((error) => console.log(error))
      .finally(() => { setLoading(false) })
  }, [])
  return (
    <div className="thoughts-list-wrapper">
      {!loading && thoughtsList.map((thought) => {
        return (
          <div className="single-thought-div">
            <p key={thought._id}>{thought.message}</p>
            <div className="thought-footer">
              <div className="heart-button"><span className="heart-emoji">❤️</span><p>x {thought.hearts}</p></div>
              <p>posted {thought.createdAt}</p>
            </div>
          </div>)
      })}
      {loading && (<h2>LOADING...</h2>)}
    </div>
  )
}