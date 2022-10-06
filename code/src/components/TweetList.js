/* eslint-disable */

import React from 'react';
import { formatRelative } from 'date-fns';


const TweetList = ({ loading, tweetList, setTweetList }) => {
  if (loading) {
    return <h1>Loading in progress...</h1>;
  }

  const onTweetCheckChange = (tweet) => {
    setTweetList((tweetList) =>
      tweetList.map((singleTweet) => {
        if (singleTweet._id === tweet._id) {
          return {
            ...singleTweet,
            isChecked: !singleTweet.isChecked,
          };
        }
        return singleTweet;
      })
    );
  };
  return (
    <section className="tweets">
      {tweetList.reverse().map((tweet) => (
        <div key={tweet._id}>
          <h4>{tweet.description}</h4>
          <input
            onChange={() => onTweetCheckChange(tweet)}
            type="checkbox"
            checked={tweet.isChecked}
          />{" "}
          <p>{formatRelative(tweet.date, new Date())}</p>
        </div>
      ))}
    </section>
  );
};

export default TweetList;
