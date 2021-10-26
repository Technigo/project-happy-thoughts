import React, { useState, useEffect } from 'react';
// import moment from 'moment';
import NewThoughtInput from './Components/NewThoughtInput';
import GetThought from 'Components/GetThoughts';

import { API_URL } from './utils/urls';

export const App = () => {
  const [thoughts, setThoughts] = useState([]);
  const [newThought, setNewThought] = useState('');

  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => setThoughts(data));
  }, []);
  //fetch request should start when the component is mounted or whenever anything gets updated
  const onNewThoughtsInputChange = (event) => {
    setNewThought(event.target.value);
  };
  const onFormSubmit = (event) => {
    event.preventDefault();

    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ message: newThought }),
    };

    fetch(API_URL, options)
      .then((res) => res.json())
      .then((data) => setThoughts([data, ...thoughts]));
  };

  return (
    <div>
      <NewThoughtInput
        onFormSubmit={onFormSubmit}
        newThought={newThought}
        onNewThoughtsInputChange={onNewThoughtsInputChange}
      />
      <GetThought thoughts={thoughts} setThoughts={setThoughts} />
    </div>
  );
};

// move onchange as in project survey?

/* <FontAwesomeIcon icon="fa-solid fa-heart" /> */
// {
//   thoughts.map((thought) => (
//     <div>
//       <p>{thought.message}</p>
//       <button> &hearts; {thought.hearts}</button>
//       <p className="date">-Created at: {moment(thought.createdAt).fromNow()}</p>
//     </div>
//   ));
// }
