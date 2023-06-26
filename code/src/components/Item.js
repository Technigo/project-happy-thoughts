import React from 'react';
import { formatDistanceToNow } from 'date-fns';

const Item = ({ thoughtId, message, likes, creationDate, handleLikes }) => {
  const creationDateObject = new Date(creationDate);
  const formattedCreationDate = formatDistanceToNow(creationDateObject, { addSuffix: true });

  const buttonGrey = (
    <button
      type="button"
      className="heart-button grey"
      onClick={() => handleLikes(thoughtId)}>
      ❤️
    </button>
  );

  const buttonPink = (
    <button
      type="button"
      className="heart-button pink"
      onClick={() => handleLikes(thoughtId)}>
      ❤️
    </button>
  );

  return (
    <article className="card">
      <p>{message}</p>
      <div className="card-bottom">
        <div className="card-bottom-left">
          {likes !== 0 ? buttonPink : buttonGrey}
          <span> x {likes}</span>
        </div>
        <div className="card-bottom-right">
          <p>{formattedCreationDate}</p>
        </div>
      </div>
    </article>
  );
};

export default Item;