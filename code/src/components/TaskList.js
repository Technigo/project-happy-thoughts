/* eslint no-underscore-dangle: 0 */
/* eslint no-shadow: 0 */

import React from 'react';
import { formatDistanceToNow } from 'date-fns';
// import { formatRelative } from 'date-fns';

const TaskList = ({ loading, taskList, setTaskList }) => {
  if (loading) {
    return <h1>Loading in progress...</h1>
  }
  const onTaskCheckChange = (task) => {
    setTaskList((taskList) => taskList.map((singleTask) => {
      if (singleTask._id === task._id) {
        return { ...singleTask, isChecked: !singleTask.isChecked };
      }
      return singleTask;
    }));
  }
  return (
    <section className="messageList">
      {taskList.map((task) => (
        <div className="singleMessage" key={task._id}>
          <h4>{task.message}</h4>
          <input onChange={() => onTaskCheckChange(task)} type="checkbox" checked={task.isChecked} />
          <p>{formatDistanceToNow(new Date(task.createdAt), Date.now(), { addSuffix: true })}</p>
          {/* <p>{formatRelative(task.date, new Date())}</p> */}
        </div>
      ))}
    </section>
  );
}

export default TaskList;