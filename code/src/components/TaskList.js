import React from 'react';
import { formatRelative } from 'date-fns';

const TaskList = ({ loading, taskList, setTaskList }) => {
  if (loading === true) {
    return <h1>Loading in progress...</h1>
  }

  const onTaskCheckChange = (task) => {
    setTaskList(() => taskList.map((singleTask) => {
      if (singleTask.id === task.id) {
        return {
          singleTask, isChecked: !singleTask.isChecked
        };
      }
      return singleTask;
    }));
  }

  return (
    // <p>{list}</p>
    <section>
      {taskList.reverse().map((task) => (
        <div key={task.id}>
          <h4>{task.description}</h4>
          <input
            type="checkbox"
            onChange={() => onTaskCheckChange(task)}
            checked={task.isChecked} />
          <p>{formatRelative(task.date, new Date())}</p>
        </div>
      ))}
    </section>
  )
}

export default TaskList;