import React, { useState, useEffect } from 'react';
import update from 'immutability-helper';

import Thought from 'components/Thought/Thought';
import Form from 'components/Form/Form';
import Main from 'components/Styled/Main';

import { URL } from 'helpers/reusables';

const App = () => {
  const [thoughts, setThoughts] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchThoughts = () => {
    setLoading(true);
    fetch(URL)
      .then((res) => res.json())
      .then((data) => {
        setThoughts(data);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  };

  // This function updates a specific thought key value based on index
  const updateThought = (newData, index, key) => {
    const news = update(thoughts, {
      [index]: { [key]: { $set: newData } }
    });
    setThoughts(news);
  };

  useEffect(() => {
    fetchThoughts();
  }, []);

  return (
    <Main>
      <Form fetchThoughts={fetchThoughts} />
      <div>{loading && 'Loading'}</div>
      {thoughts.map((thought, index) => (
        <Thought
          key={thought._id}
          index={index}
          {...thought}
          updateThought={updateThought} />
      ))}
    </Main>
  );
};

export default App;
