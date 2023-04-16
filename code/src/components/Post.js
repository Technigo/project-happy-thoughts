import React from 'react';

export const Post = ({ newPost, onNewPostChange, onPostSubmit }) => {
  return (
    <form onSubmit={onPostSubmit}>
      <h2> Post</h2>
      <textarea
        placeholder="Dear diary..."
        maxLength="140"
        value={newPost}
        onChange={onNewPostChange} />
      <p>{newPost.length} / 140</p>
      <button
        type="submit"
        disabled={newPost.length < 5 || newPost.length > 140}>
        Submit
      </button>
    </form>
  );
}
