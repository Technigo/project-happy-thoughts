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
            <p>
              <span className='thought-time'>
                {moment(thought.createdAt).fromNow()}
              </span>
            </p>
          </section>
        ))
      }
    </div>
  )

}