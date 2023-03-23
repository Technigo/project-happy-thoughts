import React from 'react';
import { formatDistanceToNow } from 'date-fns';
import Emoji from './Emoji.js';

const ListItem = ({ thoughtId, message, likes, creationDate, onHeartClick }) => {
  const creationDateObject = new Date(creationDate);
  const formattedCreationDate = formatDistanceToNow(creationDateObject, { addSuffix: true });

  const buttonWithGreyBackground = (
    <button
      type="button"
      className="heart-button grey-background"
      onClick={() => onHeartClick(thoughtId)}>
      <Emoji symbol="❤️" label="heart" />
    </button>
  );

  const buttonWithPinkBackground = (
    <button
      type="button"
      className="heart-button pink-background"
      onClick={() => onHeartClick(thoughtId)}>
      <Emoji symbol="❤️" label="heart" />
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
