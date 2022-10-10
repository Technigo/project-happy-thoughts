/* eslint-disable no-underscore-dangle */
import React, { useState, useEffect } from 'react';
import TweetForm from 'components/TweetForm';
import TweetList from 'components/TweetList';

export const App = () => {
  const [tweetList, setTweetList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [newTweet, setNewTweet] = useState('');

  const LIKES_URL = (tweetId) => `https://happy-thoughts-technigo.herokuapp.com/thoughts/${tweetId}/like`

  /// fetch the data///
  const fetchTweets = () => {
    setLoading(true);
    fetch('https://happy-thoughts-technigo.herokuapp.com/thoughts')
      .then((res) => res.json())
      .then((data) => setTweetList(data))
      .catch((error) => console.error('error1', error).finally(() => setLoading(false)));
  };

  useEffect(() => {
    fetchTweets();
  }, []); // console.log('happens once when site reloads'), []};

  /// What happens when someone click on submit the form with a new tweet///////////////////////

  const handleNewTweetChange = (event) => {
    setNewTweet(event.target.value);
  };
  // Handling the form to it's natural behaviour
  const handleFormSubmit = (event) => {
    event.preventDefault();
    // object to store data

    const options = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message: newTweet })
    };
    /// /    Lägger man till option datan här?
    fetch('https://happy-thoughts-technigo.herokuapp.com/thoughts', options)
      .then((res) => res.json())
      .then((data) => {
        fetchTweets(data); // hämtar man alla tweets och skickar med option data.
        setNewTweet('');
        // setNewCounter(0);
      });
  };

  // function that handels if anyone click on like, pass the uniq id for that tweet
  const handleNewLikeSubmit = (tweetId) => {
    const options = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' } // kolla om den här behövs.. pitfalls
    };

    fetch(LIKES_URL(tweetId), options) // fetches the data uniqe and adds object option
      .then((res) => res.json())
      .then(console.log('likes work'))
      .then((data) => { fetchTweets(data) })
      .catch((error) => console.error('error3', error))
  };

  return (
    // Form you add userinput//
    <section className="input-container">
      <TweetForm
        newTweet={newTweet}
        onNewTweetChange={handleNewTweetChange}
        handleFormSubmit={handleFormSubmit} />
      <TweetList
        loading={loading}
        tweetList={tweetList}
        onNewLikeSubmit={handleNewLikeSubmit} />{' '}
    </section>
  );
};
