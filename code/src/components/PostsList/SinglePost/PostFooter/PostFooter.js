import { LikeBtn } from 'components/Buttons/LikeBtn/LikeBtn';
import React, { useState } from 'react';
import './PostFooter.css';
import { formatDistanceToNow, parseISO } from 'date-fns';

export const PostFooter = ({ thought }) => {
  const [currentThought, setCurrentThought] = useState(thought);

  const dateObject = parseISO(thought.createdAt);
  const timeAgo = formatDistanceToNow(dateObject, { addSuffix: true })

  const onHeartCountIncrease = () => {
    const options = {
      method: 'POST'
    }

    // eslint-disable-next-line no-underscore-dangle
    fetch(`https://project-happy-thoughts-api-t716.onrender.com/thoughts/${thought._id}/like`, options)
      .then((response) => response.json())
      .then((updatedThought) => setCurrentThought(updatedThought))
      .catch((error) => console.log(error))
  }

  return (
    <section className="post-footer">
      <div className="likes" aria-label="Likes section">
        <LikeBtn thought={thought} onHeartCountIncrease={onHeartCountIncrease}>
          Increase Heart Count
        </LikeBtn>
        <p>x {currentThought.hearts}</p>
      </div>
      <div className="time-ago" aria-label="Time since the thought was posted">
        <p>{timeAgo}</p>
      </div>
    </section>
  );
}