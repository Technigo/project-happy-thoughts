import React from 'react';
import { Emoji } from './Emoji';

export const LikeButton = props => {
  const like = props.like;
  const id = props.id;

  const handleClick = () => {
    fetch(`https://happy-thoughts-technigo.herokuapp.com/thoughts/${id}/like`, {
      method: 'POST',
      body: '',
      headers: { 'Content-Type': 'application/json' }
    }).then(() => {
      props.onContentLiked(id)
    });
  };
  return (
    <div>
      <button
        className='like-button'
        onClick={handleClick}>
        <div>
          <Emoji symbol='x' />
        </div>
      </button>
      x{like}
    </div>
  );
};