import { LikeBtn } from 'components/Buttons/LikeBtn/LikeBtn';
import React, { useState } from 'react';
import './PostFooter.css';
import { formatDistanceToNow, parseISO } from 'date-fns';

// see setcolorvariable in live session tues min37
// to change button after it has a like
// if conditional (has like)
// use custom Hook
// const useBtnStyleEffect = (callbackFunction) => useEffect(callbackFunction, [callbackFunction]);

// const btnStyleFunction = () => {
// if conditional (has like)
// }

export const PostFooter = ({ thought }) => {
  const [currentThought, setCurrentThought] = useState(thought);

  const dateObject = parseISO(thought.createdAt);
  const timeAgo = formatDistanceToNow(dateObject, { addSuffix: true })

  const onHeartCountIncrease = () => {
    setCurrentThought({ ...currentThought, hearts: currentThought.hearts + 1 });
  }

  return (
    <section className="post-footer">
      <div className="likes">
        <LikeBtn thought={currentThought} onHeartCountIncrease={onHeartCountIncrease} />
        <p>x {currentThought.hearts}</p>
      </div>
      <div className="time-ago">
        <p>{timeAgo}</p>
      </div>
    </section>
  )
}