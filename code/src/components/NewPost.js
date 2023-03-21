import React, { useState } from 'react';

const NewPost = () => {
  const [newPost, setNewPost] = useState('');

  const handleFormSubmit = (event) => {
    event.preventDefault();
    const options = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message: newPost })
    }
    fetch('https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts', options)
      .then((response) => response.json())
      .then(() => {
        window.location.reload();
        setNewPost('');
      })
  };

  return (
    <div className="newPostWrapper">
      <h3 className="newPostTitle">What is making you happy right now?</h3>
      <form onSubmit={handleFormSubmit}>
        <textarea
          id="newPost"
          type="text"
          placeholder="Type something here.."
          rows="4"
          value={newPost}
          onChange={(event) => setNewPost(event.target.value)} />
        <button
          className="postBtn"
          type="submit"
          disabled={newPost.length < 5 || newPost.length > 140}>
          <span>
            <span className="heart" role="img" aria-label="heart"> ❤️ </span>
          Send happy thought
            <span className="heart" role="img" aria-label="heart"> ❤️ </span>
          </span>
        </button>

      </form>
    </div>
  )
};

export default NewPost;