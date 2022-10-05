/* eslint-disable no-underscore-dangle */
/* eslint-disable no-shadow */
import React from 'react';
import { formatDistanceToNow } from 'date-fns';

const TaskList = ({ loading, taskList, setTaskList }) => {
  if (loading) {
    return <h1>Loading in progress...</h1>
  }
  const onTaskCheckChange = (task) => {
    setTaskList((taskList) => taskList.map((singleTask) => {
      // eslint-disable-next-line no-underscore-dangle
      if (singleTask._id === task._id) {
        return { singleTask, isChecked: !singleTask.isChecked };
      }
      return singleTask;
    }));
  }
  return (
    <section>
      {taskList.map((task) => (
        <div key={task._id} className="box">
          <h4>{task.message}</h4>
          <input onChange={() => onTaskCheckChange(task)} type="checkbox" checked={task.isChecked} />
          <p>{formatDistanceToNow(new Date(task.createdAt), Date.now(), {
            addSuffix: true
          })}
          </p>
        </div>
      ))}
    </section>
  );
}

export default TaskList;