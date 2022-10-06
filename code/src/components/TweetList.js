/* eslint-disable no-underscore-dangle */

import React from 'react';
import { formatDistance } from 'date-fns';

const TweetList = ({ loading, tweetList, onNewLikeSubmit }) => {
  if (loading) {
    return <h3>Loading in progress...</h3>;
  }

  return (
    <section className="tweets-wrapper">
      {tweetList.map((tweet) => (
        <div className="tweet-box" key={tweet._id}>
          <h4 className="message-box">{tweet.message}</h4>
          <div className="like-time-box">
            <section className="like">
              <button
                type="button"
                className={tweet.hearts}
                onClick={() => onNewLikeSubmit(tweet._id)}>
                <span className="heart">🧡</span>
              </button>
              <p className="heart-counter">x {tweet.hearts}</p>
            </section>
            <p className="timestamp">
              {formatDistance(new Date(tweet.createdAt), Date.now(), { addSuffix: true })}
            </p>
          </div>
        </div>
      ))}
    </section>
  );
};

export default TweetList;

/*
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
{tweet.hearts === 0 ? 'no-like-btn' : 'like-btn'}
*/