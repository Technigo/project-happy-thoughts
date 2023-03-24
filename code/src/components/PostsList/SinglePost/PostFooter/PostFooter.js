import { LikeBtn } from 'components/Buttons/LikeBtn/LikeBtn';
import React, { useState } from 'react';
import './PostFooter.css';
import { formatDistanceToNow, parseISO } from 'date-fns';

export const PostFooter = ({ thought }) => {
  const [currentThought, setCurrentThought] = useState(thought);

  const dateObject = parseISO(thought.createdAt);
  const timeAgo = formatDistanceToNow(dateObject, { addSuffix: true })

  const onHeartCountIncrease = () => {
    setCurrentThought({ currentThought, hearts: currentThought.hearts + 1 });
  }

  return (
    <section className="post-footer">
      <div className="likes" aria-label="Likes section">
        <LikeBtn thought={currentThought} onHeartCountIncrease={onHeartCountIncrease} />
        <p>x {currentThought.hearts}</p>
      </div>
      <div className="time-ago" aria-label="Time since the thought was posted">
        <p>{timeAgo}</p>
      </div>
    </section>
  );
}