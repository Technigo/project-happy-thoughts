import React from 'react';
import './LikeButton.css';
import { Emoji } from './Emoji';

export const LikeButton = props => {
  const like = props.like;
  const id = props.id;

  const handleClick = () => {
    fetch(`https://mats-happythoughts.herokuapp.com/${id}/like`, {
      method: 'POST',
      body: '',
      headers: { 'Content-Type': 'application/json' }
    }).then(() => {
      props.onLikedContent(id)
    });
  };
  return (
    <div>
      <button
        onClick={handleClick}>
        <div>
          <Emoji symbol='♥' />
        </div>
      </button>
      {like}
    </div>
  );
};