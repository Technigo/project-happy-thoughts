import React from 'react';
import './Post.css';

export const Post = ({ newPost, onNewPostChange, onPostSubmit }) => {
  return (
    <form className="newPost" onSubmit={onPostSubmit}>
      <h2>
        Positive vibes
      </h2>
      <textarea
        className="text"
        placeholder="Dear diary..."
        maxLength="140"
        value={newPost}
        onChange={onNewPostChange} />
      <div className="postBottom">
        <button
          type="submit"
          disabled={newPost.length < 5 || newPost.length > 140}>
        Share
        </button>
        <div className="postLength">
          <p>{newPost.length} / 140</p>
        </div>
      </div>
    </form>
  );
}
