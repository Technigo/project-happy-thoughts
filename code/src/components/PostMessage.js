import React, { useState, useEffect } from 'react';

const PostMessage = ({ newMessage, fetchPosts }) => {
  const [newPost, setNewPost] = useState(''); // Initial state is an empty string
  // This function handles xx

  useEffect(() => {
    console.log('newPost useeffect:', newPost);
  }, [newPost])

  const handleFormSubmit = (event) => {
    event.preventDefault();
    console.log('newPost onformsubmit:', newPost);
    const options = {
      method: 'POST',
      body: JSON.stringify({
        message: `${newPost}`
      }),
      headers: { 'Content-Type': 'application/json' }
    };

    console.log('options:', options);
    fetch('https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts', options)
      .then((response) => response.json())
      .then((data) => {
        newMessage(data)
        setNewPost('')
        fetchPosts()
      })
      .catch((error) => console.log(error));
  }

  return (
    <div className="post-wrapper">
      <h2>What is making you happy right now?</h2>
      <form onSubmit={handleFormSubmit}>
        <textarea
          rows="3"
          placeholder="Kittens?"
          value={newPost}
          onChange={(e) => setNewPost(e.target.value)} />
        <button type="submit" id="submitPostBtn">
          <span className="emoji" aria-label="heart emoji">❤️</span> Send Happy Thought <span className="emoji" aria-label="heart emoji">❤️</span>
        </button>
      </form>
    </div>
  );
};

export default PostMessage;
