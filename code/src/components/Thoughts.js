import React, { useState, useEffect } from 'react';

import Thought from 'components/thought/Thought';
import NewThought from 'components/newthought/NewThought';
import { THOUGHTS_URL } from '../urls';

const Thoughts = () => {
  const [thoughts, setThoughts] = useState([]);

  useEffect(() => {
    fetchMessages();
  }, []);

  const fetchMessages = () => {
    fetch(THOUGHTS_URL)
      .then(response => response.json())
      .then(json => {
        const filteredThoughts = json.filter(thought => thought.message);
        setThoughts(filteredThoughts);
      })
      .catch(error => console.error(error))
  };

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