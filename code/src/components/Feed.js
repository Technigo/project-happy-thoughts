import React from 'react';
import { formatRelative } from 'date-fns';

const TaskList = ({ loading, taskList, setTaskList }) => {
  if (loading) {
    return <h1>Loading in progress...</h1>
  }
  const onTaskCheckChange = (task) => {
    setTaskList(() => taskList.map((singleTask) => {
      if (singleTask.id === task.id) {
        return { singleTask, isChecked: !singleTask.isChecked };
      }
      return singleTask;
    }));
  }
  return (
    <section>
      {taskList.reverse().map((task) => (
        <div key={task.id}>
          <h4>{task.description}</h4>
          <input onChange={() => onTaskCheckChange(task)} type="checkbox" checked={task.isChecked} />
          <p>{formatRelative(task.date, new Date())}</p>
        </div>
      ))}
    </section>
  );
}

export default TaskList;