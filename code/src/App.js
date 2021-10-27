import React, { useEffect, useState } from 'react';
import heart from './images/red-heart.png'; // Getting the red heart emoji

import { API_URL, LIKES_URL } from './utils/urls'; // The URL to the API
import NewThought from 'components/NewThought';
import AllThoughts from 'components/AllThoughts';
import LoadingItem from 'components/Loading';

export const App = () => {
  const [thoughts, setThoughts] = useState([]);
  const [newThought, setNewThoughts] = useState('');
  const [loadingPage, setLoadingPage] = useState(false);

  // Getting the posts
  useEffect(() => {
    fetchThoughts(); // invoking the function that gets the data from the API
  }, []);

  const fetchThoughts = () => {
    // sets loading to true, which makes it show
    setLoadingPage(true);
    // fetches the data from the API to show the posts
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => setThoughts(data))
      .finally(() => setLoadingPage(false));
  };

  // Posting a new happy thought
  const onFormSubmit = (event) => {
    // Prevents the page from reload when you submit the form
    event.preventDefault();

    // options that tells the function what to post to the API
    const optionsThoughts = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ message: newThought }), // This takes a string and makes it into JSON
    };

    // Takes the data and pushes it intot the array with posts
    fetch(API_URL, optionsThoughts)
      .then((res) => res.json())
      .then((data) => setThoughts([data, ...thoughts]));
  };

  // A function that adds 1 to the like (pressing the heart)
  const onLikesIncrease = (thoughtId) => {
    const options = {
      method: 'POST',
    };
    // This fetches the data from the API from the post that you click on
    fetch(LIKES_URL(thoughtId), options)
      .then((res) => res.json())
      .then((data) => {
        fetchThoughts();
      });
  };

  return (
    <div className="mainContainer">
      <h1>Welcome to my happy thoughts generator!</h1>
      {/* This is what is shown when the page is loading, a spinning heart */}
      {loadingPage && <LoadingItem />}
      {/* This is my component that takes the user input and makes a new post */}
      <NewThought
        onFormSubmit={onFormSubmit}
        newThought={newThought}
        heart={heart}
        setNewThoughts={setNewThoughts}
      />
      {/* This is my component generates all the posts in the API, it takes the data and makes it into an array with the map() */}
      {thoughts.map((thought) => (
        <AllThoughts thought={thought} onLikesIncrease={onLikesIncrease} heart={heart} />
      ))}
    </div>
  );
};
