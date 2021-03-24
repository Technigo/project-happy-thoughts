/** Component structure:
 * App
 * |--- Thought
 *      |--- Content
 *            |--- Button (type="button")
 * |--- Form
 *      |--- Button (type="submit")
 *
 *
 */
import React, { useState, useEffect } from 'react';

import Thought from 'components/Thought/Thought';
import Form from 'components/Form/Form';
import Main from 'components/Styled/Main';

import { URL, options } from 'helpers/reusables';

const App = () => {
  // States: thoughts
  // EFFECT: on mount (only empty state) => fetch the latest thoughts => set thoughts state
  // render 2 components (Thoughts and Form)
  // Thoughts.js renders only thoughts state (should be updated when thoughts state change)
  // Form.js onSubmit => setToughts((..otherthoughts) => ...new, otherthoughts )
  // since the thoughts state changed the THoughts.js should have updated
  // EFFECT: onchange thoughts => (i.e. a new Thought is added) POST new Thought
  const [thoughts, setThoughts] = useState([]);

  const fetchThoughts = () => {
    fetch(URL)
      .then((res) => res.json())
      .then((data) => {
        setThoughts(data);
      })
      .catch((err) => console.log(err));
  };
  const postThoughts = (message) => {
    fetch(URL, options(message))
      .then((res) => {
        res.json();
        fetchThoughts();
      })
      .catch((err) => console.log(err));
  };

  const handleRefresh = () => {
    fetchThoughts();
  };

  useEffect(() => {
    fetchThoughts();
  }, []);

  return (
    <Main>
      <button type="button" onClick={handleRefresh}>
        Refresh
      </button>
      <Form handlePostNewThought={postThoughts} />
      {thoughts.map((thought) => (
        <Thought key={thought._id} {...thought} />
      ))}
    </Main>
  );
};

export default App;
