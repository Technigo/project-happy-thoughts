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
      <Button type="submit" text="Submit" />
      {/* <button>Post</button> */}
    </form>
  );
};

export default PostInput;
