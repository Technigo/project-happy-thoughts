import React from 'react';

const TweetForm = ({ newTweet, onNewTweetChange, onFormSubmit }) => {
  return (
    <div className="tweets">
      <form onSubmit={onFormSubmit}>
        <h1>Spread some love! What make you happy right now?</h1>
        <textarea value={newTweet} onChange={onNewTweetChange} />
        <button type="submit">Send happy thought!</button>
      </form>
    </div>
  );
};

export default TweetForm;
