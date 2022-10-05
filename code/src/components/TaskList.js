/* eslint-disable no-underscore-dangle */
import React from 'react';
import { formatRelative } from 'date-fns';

const TaskList = ({ loading, taskList, setTaskList }) => {
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
      }
      return singleTask;
    }));
  }
  return (
    <section>
      {taskList.reverse().map((task) => (
        <div className="other-tweets-container" key={task._id}>
          <h4 className="other-tweets-headline">{task.description}</h4>
          <div className="flex">
            <input className="other-tweets-input" onChange={() => onTaskCheckChange(task)} type="checkbox" checked={task.isChecked} />
            <p className="other-tweets-date">{formatRelative(task.date, new Date())}</p>
          </div>
        </div>
      ))}
    </section>
  );
}

export default TaskList;