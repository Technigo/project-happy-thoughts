/* eslint-disable no-underscore-dangle */
import React from 'react';
import { formatDistance } from 'date-fns';

const TaskList = ({ loading, taskList, onLikesIncrease }) => {
  if (loading) {
    return <h1>Loading in progress...</h1>
  }
  return (
    <section>
      {taskList.map((thought) => (
        <div
          key={thought._id}
          className="taskList">
          <h4 className="thoughtsMessage">{thought.message}</h4>
          <div className="likeContainer">
            <button
              type="button"
              className={(thought.hearts === 0 ? 'like-btn' : 'no-like-btn')}
              onClick={() => onLikesIncrease(thought._id)}>❤️
            </button>
            <p className="counter">x {thought.hearts}</p>
          </div>
          <p className="date">{formatDistance(new Date(thought.createdAt), Date.now(), { addSuffix: true })}</p>
        </div>
      ))}
    </section>
  );
}

export default TaskList;