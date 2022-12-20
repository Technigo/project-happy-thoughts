import React from 'react';

const NewPost = ({ handleFormSubmit, onNewPostChange, newPost }) => {
  return (
    <div className="newPost-wrapper">
      <form onSubmit={handleFormSubmit}>
        <label className="newPost-label" htmlFor="newPost">What is making you happy right now?
          <textarea
            className="newPost-input"
            id="newPost"
            type="text"
            value={newPost}
            maxLength="140"
            onChange={onNewPostChange}
            rows="4"
            cols="40" />
          <p style={{ color: newPost.length > 130 ? 'red' : 'black' }}>{newPost.length}/140</p>
          <button className="submit-button" type="submit"><span>❤️️</span> Send Happy Thought <span>❤️️</span></button>
        </label>
      </form>
    </div>
  )
};

export default NewPost