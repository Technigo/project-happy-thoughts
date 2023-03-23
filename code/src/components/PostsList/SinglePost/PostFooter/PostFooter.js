import { LikeBtn } from 'components/Buttons/LikeBtn/LikeBtn';
import React from 'react';
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

export const PostFooter = ({ likes, time }) => {
  const dateObject = parseISO(time);
  const timeAgo = formatDistanceToNow(dateObject, { addSuffix: true })
  return (
    <footer className="post-footer">
      <div className="likes">
        <LikeBtn />
        <p>x {likes}</p>
      </div>
      <div className="time-ago">
        <p>{timeAgo}</p>
      </div>
    </footer>
  )
}