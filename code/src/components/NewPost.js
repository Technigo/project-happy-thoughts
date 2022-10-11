import React from 'react';

const NewPost = ({ handleFormSubmit, onNewPostChange, newPost }) => {
  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <label htmlFor="newPost">What is making you happy right now?
          <textarea
            id="newPost"
            type="text"
            value={newPost}
            maxLength="140"
            onChange={onNewPostChange} />
          <p style={{ color: newPost.length > 130 ? 'red' : 'black' }}>{newPost.length}/140</p>
          <button type="submit"><span>❤️️</span> Send Happy Thought <span>❤️️</span></button>
        </label>
      </form>
    </div>
  )
};

export default NewPost