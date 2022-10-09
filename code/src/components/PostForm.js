import React from 'react';

const PostForm = ({ handleFormSubmit, onNewPostChange, newPost }) => {
  return (
    <form onSubmit={handleFormSubmit}>
      <h2>Submit your happy thought in the textarea</h2>
      <textarea value={newPost} onChange={onNewPostChange} />
      <button type="submit">submit your thought</button>
    </form>
  );
}

export default PostForm;