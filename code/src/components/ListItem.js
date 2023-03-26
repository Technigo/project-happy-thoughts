import React from 'react';
import { formatDistanceToNow } from 'date-fns';

const ListItem = ({ thoughtId, message, likes, creationDate, handleLikes }) => {
  const creationDateObject = new Date(creationDate);
  const formattedCreationDate = formatDistanceToNow(creationDateObject, { addSuffix: true });

  // Two different heart backgrounds depending on if there are likes or not

  const buttonWithGreyBackground = (
    <button
      type="button"
      className="heart-button grey-background"
      onClick={() => handleLikes(thoughtId)}>
      ❤️
    </button>
  );

  const buttonWithPinkBackground = (
    <button
      type="button"
      className="heart-button pink-background"
      onClick={() => handleLikes(thoughtId)}>
      ❤️
    </button>
  );

  return (
    <article className="card">
      <p>{message}</p>
      <div className="card-bottom">
        <div className="card-bottom-left">
          {likes !== 0 ? buttonWithPinkBackground : buttonWithGreyBackground}
          <span> x {likes}</span>
        </div>
        <div className="card-bottom-right">
          <p>{formattedCreationDate}</p>
        </div>
      </div>
    </article>
  );
};

export default ListItem;
