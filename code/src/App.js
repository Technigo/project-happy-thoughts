import React, { useState, useEffect } from 'react';
import TweetForm from 'components/TweetForm';
import TweetList from 'components/TweetList';

export const App = () => {
  // const [userInput, setUserInput] = useState(0);
  const [tweetList, setTweetList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [newTweet, setNewTweet] = useState('');

  /// fetch the data///
  const fetchTweets = () => {
    setLoading(true);
    fetch('https://happy-thoughts-technigo.herokuapp.com/thoughts')
      .then((data) => data.json())
      .then((transformedData) => setTweetList(transformedData)
        .catch((error) => console.log.error(error))
        .finally(() => setLoading(false)));
  };

  useEffect(() => {
    fetchTweets();
  }, []); // console.log('happens once when site reloads'), []};

  // Handling the
  function handleNewTweetChange(event) {
    setNewTweet(event.target.value);
  }
  // Handling the form to it's natural behaviour
  const onFormSubmit = (event) => {
    event.preventDefault();
    // object to store data we need
    const options = {
      method: 'POST',
      body: JSON.stringify({ message: newTweet })
    };

    fetch('https://happy-thoughts-technigo.herokuapp.com/thoughts', options)
      .then((res) => res.json())
      .then((newTweet) => setTweetList((previousTweet) => [newTweet, ...previousTweet]))
  };

  return (
    // Form you add userinput//
    <section className="input-container">
      <TweetForm
        newTweet={newTweet}
        onNewTweetChange={handleNewTweetChange}
        onFormSubmit={onFormSubmit} />

      <div className="tweets-wrapper">
        <TweetList
          loading={loading}
          tweetList={tweetList}
          setTweetList={setTweetList} />
      </div>
    </section>
  );
};
