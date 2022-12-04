import React from 'react';

const TweetForm = ({ newTweet, onNewTweetChange, handleFormSubmit }) => {
  return (
    <>
      <div className="top-contatiner">
        <h3 className="sub-title">Spread some</h3>
      </div>
      <div className="form-container">
        <form onSubmit={handleFormSubmit}>

          <h1 className="title">LOVE</h1>
          {/* <h3 className="sub-title">What makes you happy right now?</h3> */}
          <div className="textarea-wrapper">
            <textarea
              value={newTweet}
              onChange={onNewTweetChange}
              placeholder="Write something that made you smile today.."
              rows="7"
              cols="30" />
            <p className="counter">{140 - newTweet.length} / 140</p>
          </div>
          <div className="button-wrapper">
            <button
              className="button-form"
              type="submit"
              disabled={newTweet.length < 5 || newTweet.length > 140}>
              <span className="heart">🧡&nbsp;&nbsp;&nbsp;</span><strong>Send a happy thought!</strong>
              <span className="heart">&nbsp;&nbsp;&nbsp;🧡</span>
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default TweetForm;
