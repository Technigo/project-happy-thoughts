import React, { useState, useEffect } from 'react';

import Thought from 'components/thought/Thought';
import NewInput from 'components/newthought/NewInput';
import { THOUGHTS_URL } from '../urls';

const Thoughts = () => {
  const [thoughts, setThoughts] = useState([]);

  useEffect(() => {
    fetchThoughts();
  }, []);

  const fetchThoughts = () => {
    fetch(THOUGHTS_URL)
      .then(response => response.json())
      .then(json => {
        const filteredThoughts = json.filter(thought => thought.message);
        setThoughts(filteredThoughts);
      })
      .catch(error => console.error(error));
  };

  const addNewThought = newThought => {
    fetch(THOUGHTS_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message: newThought })
    }).then(() => fetchThoughts());
  }

  const onLiked = thoughtId => {
    const updatedThoughts = thoughts.map(thought => {
      if (thought._id === thoughtId) {
        thought.hearts += 1
      }
      return thought
    })
    setThoughts(updatedThoughts)
  }

  return (
    <section>
      <NewInput onInputChange={addNewThought} />
      {thoughts.map(thought => {
        return (
          <Thought
            key={thought._id}
            id={thought._id}
            created={thought.createdAt}
            likes={thought.hearts}
            message={thought.message}
            onLiked={onLiked}
          />
        )
      })}
    </section>
  )
}

export default Thoughts;