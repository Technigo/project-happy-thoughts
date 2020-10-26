import React, { useState } from 'react';

import Button from './Button';

const PostInput = () => {
  const POSTS_URL = 'https://happy-thoughts-technigo.herokuapp.com/thoughts';
  const [post, setPost] = useState('');

  const handleSubmit = event => {
    event.preventDefault();
    fetch(POSTS_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ message: post }),
    }).then(() => {
      window.location.reload();
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <textarea
        rows="4"
        onChange={event => setPost(event.target.value)}
      ></textarea>
      <div>
        <Button
          type="submit"
          disabled={post.length < 6 || post.length > 140 ? true : false}
          text={
            <p>
              <span role="img" aria-label="Heart">
                {'❤️ '}
              </span>
              Post Thought
              <span role="img" aria-label="Heart">
                {' ❤️'}
              </span>
            </p>
          }
        />
        {/* add a tooltip on hover to inform if too short or too long */}
        <p
          className={
            post.length < 6 || post.length > 140 ? 'text--red' : 'text'
          }
        >
          {post.length / 140}
        </p>
      </div>
      {/* <button>Post</button> */}
    </form>
  );
};

export default PostInput;
