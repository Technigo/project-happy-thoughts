import React from 'react';

const TweetForm = ({ newTweet, onNewTweetChange, handleFormSubmit }) => {
  console.log('newTweet', newTweet);
  return (
    <div className="tweets">
      <form onSubmit={handleFormSubmit}>
        <h1>Spread some love! What make you happy right now?</h1>
        <textarea
          value={newTweet}
          onChange={onNewTweetChange}
          placeholder="What made you smile today?"
          rows="6"
          cols="30" />
        <button
          type="submit"
          disabled={newTweet.length < 5 || newTweet.length > 140}>Send happy thought!
        </button>
      </form>
    </div>
  );
};

export default TweetForm;