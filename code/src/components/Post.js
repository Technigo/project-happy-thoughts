import React from 'react';

export const Post = ({ newPost, onNewPostChange, onPostSubmit }) => {
  return (
    <form onSubmit={onPostSubmit}>
      <h2> Post</h2>
      <textarea value={newPost} onChange={onNewPostChange} />
      <button type="submit">Submit</button>
    </form>
  );
}
