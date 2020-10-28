import React from 'react';
import './LikeButton.css';
import { Emoji } from './Emoji';

export const LikeButton = props => {
  const likes = props.likes;
  const id = props.id;

  const handleClick = () => {
    fetch(`https://happy-thoughts-technigo.herokuapp.com/thoughts`, {
      method: 'POST',
      body: '',
      headers: { 'Content-Type': 'application/json' }
    }).then(() => {
      props.onLikedThought(id);
    });
  };
  return (
    <div>
      <button onClick={handleClick}>
        <div>
          <Emoji symbol='♥' />
        </div>
      </button>
      x{likes}
    </div>
  );
};