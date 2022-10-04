/* eslint-disable no-underscore-dangle */
import React from 'react';
import { formatRelative } from 'date-fns';

const MessageList = ({ loading, messageList, setMessageList }) => {
  if (loading === true) {
    return <h1>Loading in progress...</h1>
  }

  const onTaskCheckChange = (task) => {
    setMessageList(() => messageList.map((singleTask) => {
      if (singleTask._id === task._id) {
        return {
          ...singleTask, isChecked: !singleTask.isChecked
        };
      }
      return singleTask;
    }));
  }

  return (
    <section className="message-box">
      {messageList.reverse().map((task) => (
        <div key={task._id} style={{ background: 'grey' }}>
          <h4>{task.description}</h4>
          <input
            type="checkbox"
            value={task}
            placeholder="Type your thoughts here..."
            onChange={() => onTaskCheckChange(task)}
            checked={task.isChecked} />
          <p>{formatRelative(task.date, new Date())}</p>
        </div>
      ))}
    </section>
  )
}

export default MessageList;