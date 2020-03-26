import React, { useState, useEffect } from 'react'
import moment from 'moment';

export const ThoughtsList = () => {
  const THOUGHTS_URL = 'https://technigo-thoughts.herokuapp.com/'
  const [thoughts, setThoughts] = useState([])

  useEffect(() => {
    fetch(THOUGHTS_URL)
      .then((res) => {
        return res.json()
      })
      .then(data => {
        setThoughts(data)

        console.log(data)

      })
  }, [])



  return (
    <div>
      {
        thoughts.map(thought => (
          <section className='thought'>
            <p key={thought.id}>
              {thought.message}
            </p>
            <div className="heart-wrapper">
              <div className="heart-section">
                <button className="heart-btn">
                  ❤️
                </button>
                <p className="likes">
                  x 0
                </p>
              </div>
              <p>
                <span className='thought-time'>
                  {moment(thought.createdAt).fromNow()}
                </span>
              </p>
            </div>
          </section>
        ))
      }
    </div>
  )

}