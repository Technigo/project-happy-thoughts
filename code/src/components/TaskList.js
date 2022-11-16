/* eslint-disable linebreak-style */
import React from 'react';
import { formatRelative } from 'date-fns';
import SingleTask from './SingleTask';

const TaskList = ({ loading, taskList }) => {
  if (loading) {
    return <h1>Loading in progress...</h1>
  }
  /* const onTaskCheckChange = (task) => {
    setTaskList(taskList => taskList(singleTask => {
        if(singleTask._id === task._id) {
          return { ...singleTask, isChecked: !singleTask.isChecked};
        }
        return singleTask;
    }))
  } */
  return (
    <section>
      {taskList.reverse().map((singleTask) => {
        return (
          <div key={singleTask._id}>
            <SingleTask description={singleTask.description} checked={singleTask.isChecked} />
            <p>{formatRelative(singleTask.date, new Date())}</p>
          </div>
        )
      })}
    </section>
  );
}

export default TaskList;