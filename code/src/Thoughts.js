import React, { useState, useEffect } from 'react';

import Thought from 'Thought';
import NewThought from 'NewThought';

const Thoughts = () => {
  const [thoughts, setThoughts] = useState([]);

  useEffect(() => {
    const THOUGHTS_URL = "https://happy-thoughts-technigo.herokuapp.com/thoughts";
    fetch(THOUGHTS_URL)
      .then(response => response.json())
      .then(json => {
        setThoughts(json);
      })
  }, []);

  return (
    <section>
      <NewThought />
      {thoughts.map(thought => {
        return (
          <Thought
            key={thought._id}
            created={thought.createdAt}
            likes={thought.hearts}
            message={thought.message}
          />
        )
      })}
    </section>
  )
}

export default Thoughts;