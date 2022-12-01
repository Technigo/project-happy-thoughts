import React from 'react';
import { formatDistanceToNow } from 'date-fns';

/* Thoughtlist component, where all the "old" thougts are printed, and here you can like the
  post. The background around the like button (the heart) is transparent until you "like it"
  (click it) the loading will show when (if) the pages rerenders */
const ThoughtList = ({ loading, taskList, handleLikesIncrease }) => {
  if (loading) {
    return <h1>Loading in progress...</h1>
  }

  return (
    <section className="thoughts-container">
      {taskList.map((task) => (
        <div className="thoughts-boxes" key={task._id}> {/* eslint-disable-line */}
          <div className="thoughts-message">
            <h4>{task.message}</h4>
          </div>
          <div className="thoughts-like-section">
            <div className="btn-parent">
              {/* button with a conditional thats and if or else, if user pressed button "not liked"
              else "liked" with diffrent background color */}
            <button className={task.hearth > 0 ? "likeBtn-liked" : "likeBtn-not-liked"} onClick={(event) => handleLikesIncrease(task._id, event)}> {/* eslint-disable-line */}
                <span className="icon" role="img" aria-label="heart" aria-hidden="false">❤️</span>
            </button> {/* eslint-disable-line */}
              <span>x {task.hearth}</span>
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