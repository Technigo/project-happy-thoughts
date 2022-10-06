/* eslint-disable no-underscore-dangle */
import React from 'react';
/* import { formatRelative } from 'date-fns'; */
import { formatDistance } from 'date-fns';

const TaskList = ({ loading, taskList, setTaskList, onLikes }) => {
  /*   useEffect(() => {
      console.log('component did mount');
      return (
        console.log('component unmounted')
      )
    }, []) */
  /* return (
      <div>
        {list.map((singleTask) => {
          return (
            <div key={singleTask._id}>
              <p>{singleTask.description}</p>
            </div>
          )
        })}
      </div>
    );
  } */

  if (loading) {
    return <h1>Loading in progress...</h1>
  }
  const onTaskCheckChange = (task) => {
    // eslint-disable-next-line no-shadow
    setTaskList((taskList) => taskList.map((singleTask) => {
      if (singleTask._id === task._id) {
        return { ...singleTask, isChecked: !singleTask.isChecked };
        /* (previousThoughts) => [updatedThought, ...previousThoughts] */
      }
      return singleTask;
    }));
  }

  return (
    <section>
      {taskList.map((task) => (
        <div className="other-tweets-container" key={task._id}>
          <h4 className="other-tweets-headline">{task.message}</h4>
          <label htmlFor="test" className="test">
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;From oldest to newest
            <input
              onChange={() => onTaskCheckChange(task)}
              type="checkbox"
              checked={task.isChecked}
              className="other-tweets-input"
              id="test" />
          </label>
          <div className="flex">
            <button
              type="button"
              onClick={() => onLikes(task._id)}
              className="like-button">
              <img src="https://img.icons8.com/emoji/48/000000/red-heart.png" alt="like" className="like-button-image" />
            </button>
            <p>x{task.hearts}</p>
            <p className="other-tweets-date">{formatDistance(new Date(task.createdAt), Date.now(), { addSuffix: true })}</p>
          </div>
        </div>
      ))}
      {/* console.log(task.hearts) */}
    </section>
  );
}

export default TaskList;