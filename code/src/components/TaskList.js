/* eslint-disable no-underscore-dangle */
import React from 'react';
import { formatDistance } from 'date-fns';

const TaskList = ({ loading, taskList, onLikes }) => {
  if (loading) {
    return <h1>Loading in progress...</h1>
  }

  return (
    <section>
      {taskList.map((task) => (
        <div className="other-tweets-container" key={task._id}>
          <h4 className="other-tweets-headline">{task.message}</h4>
          <div className="flex">
            <button
              type="button"
              onClick={() => onLikes(task._id)}
              className="like-button">
              <img src="https://img.icons8.com/emoji/48/000000/red-heart.png" alt="like" className="like-button-image" />
            </button>
            <p className="like-counter">x{task.hearts}</p>
            <p className="other-tweets-date">{formatDistance(new Date(task.createdAt), Date.now(), { addSuffix: true })}</p>
          </div>
        </div>
      ))}
    </section>
  );
}

export default TaskList;