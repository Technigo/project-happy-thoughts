import React from 'react';
import { formatDistance } from 'date-fns';

const TweetList = ({ loading, tweetList, onNewLikeSubmit }) => {
  if (loading) {
    return <h4 className="loading-text">Loading 3.. 2.. 1..</h4>
  }
  return (
    <section className="tweets-wrapper">
      {tweetList.map((tweet) => {
        return (
          <div className="tweet-container" key={tweet._id}>
            <h4 className="message-box">{tweet.message}</h4>
            <div className="like-time-box">
              <div className="like-wrapper">
                <button
                  className={
                    tweet.hearts === 0 ? 'button-no-likes' : 'button-likes'
                  }
                  type="button"
                  onClick={() => onNewLikeSubmit(tweet._id)}>
                  <span className="heart">🧡</span>
                </button>
                <p className="heart-counter">x {tweet.hearts}</p>
              </div>
              <p className="time-stamp">
                {formatDistance(new Date(tweet.createdAt), Date.now(), {
                  addSuffix: true
                })}
              </p>
            </div>
          </div>
        );
      })}
    </section>
  );
};
export default TweetList;
