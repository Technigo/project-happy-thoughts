/* eslint-disable no-underscore-dangle */
import React, { useState, useEffect } from 'react';
import TweetForm from 'components/TweetForm';
import TweetList from 'components/TweetList';

export const App = () => {
  const [tweetList, setTweetList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [newTweet, setNewTweet] = useState('');

  /// fetch the data///
  const fetchTweets = () => {
    setLoading(true);
    fetch('https://happy-thoughts-technigo.herokuapp.com/thoughts')
      .then((res) => res.json())
      .then((data) => setTweetList(data.response)); // Add transformedData.respons here?
    // .catch((error) => console.log.error(error));
    // .finally(() => setLoading(false)); // instead of false '' samma sak?
  };

  useEffect(() => {
    fetchTweets();
  }, []); // console.log('happens once when site reloads'), []};

  // Handling the
  const handleNewTweetChange = (event) => {
    setNewTweet(event.target.value);
  };
  // Handling the form to it's natural behaviour
  const handleFormSubmit = (event) => {
    event.preventDefault();
    // object to store data we need

    const options = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message: newTweet })
    }; // addin header here?

    fetch('https://happy-thoughts-technigo.herokuapp.com/thoughts', options)
      .then((res) => res.json())
      .then(() => fetchTweets())
      .finally(() => setNewTweet(''));
  };

  const handleNewLikeSubmit = (_id) => {
    const options = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' }
    };

    fetch(
      `https://api-happy-tweets.herokuapp.com/thoughts/${_id}/like`,
      options
    )
      .then((res) => res.json())
      .then((data) => {
        fetchTweets(data.response._id);
      });
  };

  return (
    // Form you add userinput//
    <section className="input-container">
      <TweetForm
        newTweet={newTweet}
        onNewTweetChange={handleNewTweetChange}
        handleFormSubmit={handleFormSubmit} />

      <div className="tweets-wrapper">
        <TweetList
          loading={loading}
          tweetList={tweetList}
          handleNewLikeSubmit={handleNewLikeSubmit} />{' '}
      </div>
    </section>
  );
};

/*
//BU Handling the form to it's natural behaviour
  const handleFormSubmit = (event) => {
    event.preventDefault();
    // object to store data we need

    const options = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message: newTweet })
    }; // addin header here?

    fetch('https://happy-thoughts-technigo.herokuapp.com/thoughts', options)
      .then((res) => res.json())
      .then((newTweet) => setTweetList((previousTweet) => [newTweet, ...previousTweet]));
  };
*/
