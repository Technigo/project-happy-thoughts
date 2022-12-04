import React, { useState, useEffect } from 'react';
import TweetForm from 'components/TweetForm';
import TweetList from 'components/TweetList';

export const App = () => {
  const [tweetList, setTweetList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [newTweet, setNewTweet] = useState('');

  const LIKES_URL = (tweetId) => `https://project-happy-thoughts-api-xjix6ss5fq-lz.a.run.app/thoughts/${tweetId}/like`;

  /// function fetching the tweet data
  const fetchTweets = () => {
    setLoading(true);
    fetch('https://project-happy-thoughts-api-xjix6ss5fq-lz.a.run.app/thoughts')
      .then((res) => res.json())
      .then((data) => setTweetList(data))
      .catch((error) => console.error('error1', error))
      .finally(() => setLoading(false));
  };

  // happens once when site reloads'), []};
  useEffect(() => {
    fetchTweets();
  }, []);

  // handling the event when there is a new tweet
  const handleNewTweetChange = (event) => {
    setNewTweet(event.target.value);
  };

  /** Writing a Tweet and sumbit ** */

  // prevents forms natural behaviour to submit when reloading page
  const handleFormSubmit = (event) => {
    event.preventDefault();

    // creats object to store the data (message). This is a standard set of keys
    // that Backend needs/expect when communicating with your app.
    // Body is storing your content/data.
    const options = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message: newTweet })
    };

    // Gets all tweets and updates width option data when page reload.
    fetch('https://project-happy-thoughts-api-xjix6ss5fq-lz.a.run.app/thoughts', options) // Catch (POST) updated data thoughts + new thought/tweet
      .then((res) => res.json())
      .then((data) => {
        fetchTweets(data); // GET all data (including updated data)
        setNewTweet('');
      });
  };

  /** **** LIKES ****** */
  // function that handels when the like-button gets a click, pass the uniq id for that tweet
  const handleNewLikeSubmit = (tweetId) => {
    console.log('tweetId', tweetId)
    const options = {
      method: 'PATCH'
    };

    // Increases likes count on server for uniq tweet id
    fetch(LIKES_URL(tweetId), options) // Catch the data and update with uniqe object (option)
      .then((res) => res.json())
      .then((data) => {
        fetchTweets(data)
        console.log('data2', data); // Gets/request all data again
      })
      .catch((error) => console.error('error2', error));
  };

  return (
    <section className="container">
      <TweetForm
        newTweet={newTweet}
        onNewTweetChange={handleNewTweetChange}
        handleFormSubmit={handleFormSubmit} />
      <TweetList
        loading={loading}
        tweetList={tweetList}
        onNewLikeSubmit={handleNewLikeSubmit} />
    </section>
  );
};
