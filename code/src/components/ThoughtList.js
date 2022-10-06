import React from 'react';
import { formatDistanceToNow } from 'date-fns';

const ThoughtList = ({ loading, taskList, handleLikesIncrease }) => {
  if (loading) {
    return <h1>Loading in progress...</h1>
  }

  return (
    <section className="thoughts-container">
      {taskList.map((task) => (
        <div className="thougts-boxes" key={task._id}> {/* eslint-disable-line */}
          <div className="thoughts-message">
            <h4>{task.message}</h4>
          </div>
          <div className="thoughts-like-section">
            <div className="btn-parent">
            <button className="btn" type="button" onClick={(event) => handleLikesIncrease(task._id, event)}> {/* eslint-disable-line */}
                <span className="icon" role="img" aria-label="heart" aria-hidden="false">❤️</span>
            </button> {/* eslint-disable-line */}
              <span>x {task.hearts}</span>
            </div>
            {formatDistanceToNow(
              new Date(task.createdAt),
              Date.now(),
              { addSuffix: true }
            )}
          </div>
        </div>
      ))}
    </section>
  );
}

export default ThoughtList;