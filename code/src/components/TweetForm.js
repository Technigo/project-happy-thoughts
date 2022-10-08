import React from 'react';

const TweetForm = ({ newTweet, onNewTweetChange, handleFormSubmit }) => {
  console.log('newTweet', newTweet);
  return (
    <div className="input-box">
      <form onSubmit={handleFormSubmit}>
        <h1>Spread some love!</h1>
        <h3>What makes you happy right now?</h3>
        <textarea
          value={newTweet}
          onChange={onNewTweetChange}
          placeholder="Write something that made you smile today.."
          rows="6"
          cols="30" />
        <div className="button-wrapper">
          <button
            className="button-form"
            type="submit"
            disabled={newTweet.length < 5 || newTweet.length > 140}>
            <span className="heart">🧡</span>Send happy thought!<span className="heart">🧡</span>
          </button>
        </div>
      </form>
    </div>
  );
};

export default TweetForm;