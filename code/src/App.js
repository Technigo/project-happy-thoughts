import React, { useState, useEffect } from 'react';
import moment from 'moment';

const THOUGHTS_URL = 'https://happy-thoughts-technigo.herokuapp.com/thoughts'

export const App = () => {
  const [thoughts, setThoughts] = useState()

  useEffect(() => {
    fetch(THOUGHTS_URL)
      .then((res) => res.json())
      .then((data) => {
        const filteredData = data.filter((thought) => thought.text !== '')
        filteredData.reverse();
        setThoughts(filteredData)
      })
  }, [])
  return (
    <main>
      {
        thoughts && thoughts.map((thought) => (
          <p className="thought">
            {thought.message}
            <span className="thought-time">
              {moment(thought.createdAt).fromNow()}
            </span>
          </p>
        ))
      }
    </main>
  )
}
