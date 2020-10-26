import React, { useState } from 'react';

import Button from './Button';

import './Styles.scss';

const PostInput = () => {
  const POSTS_URL = 'https://happy-thoughts-technigo.herokuapp.com/thoughts';
  const [post, setPost] = useState('');
  const [name, setName] = useState('');

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
    <form onSubmit={handleSubmit} className="Form">
      {/* <label>
        <input
          type="text"
          placeholder="Type your name..."
          onChange={event => setName(event.target.value)}
        ></input>
      </label> */}
      <label>
        <h1>What's making you happy right now?</h1>
        <textarea
          rows="4"
          placeholder="Type your happy thought..."
          onChange={event => setPost(event.target.value)}
        ></textarea>
      </label>
      <div className="form-wrapper">
        <Button
          type="submit"
          className="Button"
          disabled={post.length < 6 || post.length > 140 ? true : false}
          text={
            <p>
              <span role="img" aria-label="Heart">
                {'❤️ '}
              </span>
              Send Happy Thought
              <span role="img" aria-label="Heart">
                {' ❤️'}
              </span>
            </p>
          }
        />
        {/* add a tooltip on hover to inform if too short or too long */}
        <p className="">
          <span
            className={
              post.length < 6 || post.length > 140 ? 'text--red' : 'text'
            }
          >
            {140 - post.length}
          </span>
          / 140
        </p>
      </div>
      {/* <button>Post</button> */}
    </form>
  );
};

export default PostInput;
