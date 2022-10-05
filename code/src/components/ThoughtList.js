/* eslint-disable no-underscore-dangle */
/* eslint-disable no-shadow */
import React from 'react';
import { formatDistanceToNow } from 'date-fns';

const ThoughtList = ({ loading, thoughtList, onThoughtLikeChange }) => {
  if (loading) {
    return <h1>loading...</h1>
  }

  /* const onThoughtLikeChange = (thought) => {
    setThoughtList((thoughtList) => thoughtList.map((singleThought) => {
      // eslint-disable-next-line no-underscore-dangle
      if (singleThought._id === thought._id) {
        return { singleThought, isChecked: !singleThought.isChecked };
      }
      return singleThought;
    }));
  } */

  return (
    <section className="thought-list-container">
      {thoughtList.map((thought) => (
        <div key={thought._id} className="thought-list">
          <h4 className="the-thought">{thought.message}</h4>
          <div className="thought-detail">
            <button
              type="button"
              className={thought.hearts === 0 ? 'empty-button' : 'like-button'}
              onClick={() => onThoughtLikeChange(thought._id)}><span>💖</span>
            </button>
            <p className="likes">x{thought.hearts}</p>
            <p className="time-detail">
              {formatDistanceToNow(
                new Date(thought.createdAt),
                Date.now(),
                { addSuffix: true }
              )}
            </p>
          </div>
        </div>
      ))}
    </section>
  )
}
export default ThoughtList;