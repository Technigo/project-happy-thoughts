import React, { useState, useEffect } from 'react';

import Thought from 'components/Thought/Thought';
import Form from 'components/Form/Form';
import Main from 'components/Styled/Main';

import { URL, URL_LIKE, options } from 'helpers/reusables';

const App = () => {
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
  const postLikes = (id) => {
    fetch(URL_LIKE(id), options())
      .then((res) => {
        res.json();
        fetchThoughts();
      })
      .catch((err) => console.log(err));
  }

  useEffect(() => {
    fetchThoughts();
  }, []);

  return (
    <Main>
      <Form handlePostNewThought={postThoughts} />
      {thoughts.map((thought) => (
        <Thought key={thought._id} {...thought} handlePostLikes={postLikes} />
      ))}
    </Main>
  );
};

export default App;
