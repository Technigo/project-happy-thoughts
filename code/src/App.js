import React, { useEffect, useState } from 'react';
import { API_URL, LIKES_URL } from './utils/urls';
import ThoughtForm from './Components/ThoughtForm';
import ThoughtItem from './Components/ThoughtItem';
import LoadingItem from './Components/LoadingItem';

export const App = () => {
  const [thoughts, setThoughts] = useState([]);
  const [newThought, setNewThought] = useState('');
  const [count, setCount] =
    useState(0); /*set state for send thoughts counter */
  const [loading, setLoading] = useState(false);

  const handleIncrement = () =>
    setTimeout(() => setCount((currentCount) => currentCount + 1), 500);

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

  // useEffect(() => {
  //   if (count >= 1) return <div>hello</div>;
  // });
  // console.log(count);

  const onFormSubmitt = (event) => {
    event.preventDefault();

    const thoughts = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ message: newThought }),
    };
    fetch(API_URL, thoughts)
      .then((res) => res.json())
      .then((data) => {
        // setThoughts([data, ...thoughts]);

        fetchThoughts();
      });
  };
  const onLikesIncrease = (thoughtId) => {
    const options = {
      method: 'POST',
    };
    fetch(LIKES_URL(thoughtId), options)
      .then((res) => res.json())
      .then((data) => {
        fetchThoughts();
      });
  };

  return (
    <fieldset>
      <legend> Happy thoughts project </legend>

      <div className='app'>
        {loading && <LoadingItem />}
        <div>
          <ThoughtForm
            onFormSubmitt={onFormSubmitt}
            newThought={newThought}
            setNewThought={setNewThought}
            handleIncrement={handleIncrement}
            count={count}
          />
        </div>

        {thoughts.map((thought) => (
          <ThoughtItem
            key={thought._id}
            thought={thought}
            onLikesIncrease={onLikesIncrease}
          />
        ))}
      </div>
    </fieldset>
  );
};
