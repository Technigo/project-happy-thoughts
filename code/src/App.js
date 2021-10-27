import React, { useState, useEffect } from 'react';

import NewThoughtInput from './Components/NewThoughtInput';
import GetThought from './Components/GetThoughts';
import LoadingItem from './Components/LoadingItem';

import { API_URL, LIKES_URL } from './utils/urls';

export const App = () => {
  const [thoughts, setThoughts] = useState([]);
  const [newThought, setNewThought] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchThoughts();
  }, []);

  const fetchThoughts = () => {
    setLoading(true);
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => setThoughts(data))
      .finally(() => setLoading(false));
  };
  //fetch request should start when the component is mounted or whenever anything gets updated

  //if its going to be called by a child it is named handle instead of on
  const handleFormSubmit = (event) => {
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
      .then((data) => {
        fetchThoughts();
      });
    setNewThought('');
  };

  const handleLikesIncrease = (thoughtId) => {
    const options = {
      method: 'POST',
    };

    fetch(LIKES_URL(thoughtId), options)
      .then((res) => res.json())
      .then((data) => {
        // //v1 increase likes only

        // const UpdatedThoughts = thoughts.map((item) => {
        //   if (item._id === data._id) {
        //     item.hearts += 1;
        //     return item;
        //   } else {
        //     return item;
        //   }
        // });

        // setThoughts(UpdatedThoughts);
        fetchThoughts();
      });
  };

  return (
    <div>
      {loading && <LoadingItem />}
      <NewThoughtInput
        onFormSubmit={handleFormSubmit}
        newThought={newThought}
        setNewThought={setNewThought}
      />
      {thoughts.map((thought) => (
        <GetThought
          key={thought._id}
          thought={thought}
          onLikesIncrease={handleLikesIncrease}
        />
      ))}
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
