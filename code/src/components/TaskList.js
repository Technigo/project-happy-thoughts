import React from 'react';
// import { formatRelative } from 'date-fns';
import Moment from 'react-moment';
import 'moment-timezone';

const dateToFormat = '1976-04-19T12:59-0500';

// const onMessageLiked = (likedMessageId) => {
//   const updatedMessages = messages.map((message) => {
//     if (message._id === likedMessageId) {
//       message.hearts += 1
//     }
//     return message
//   })
//   setMessages(updatedMessages)
// }

const TaskList = ({ taskList, setTaskList, onLikesIncrease }) => {
  // const onLikeBtnClick = (task) => {
  //   setTaskList((taskList) => taskList.map((singleTask) => {
  //     if (singleTask._id === task._id) {
  //       return { ...singleTask, isChecked: !singleTask.isChecked };

  //       // some imput here to get the hearts
  //     }
  //     return singleTask;
  //   }));
  // }
  return (
    <section>
      {taskList.reverse().map((task) => (
        /* eslint no-underscore-dangle: 0 */
        <div
          className="taskList"
          key={task._id}>
          <h4 className="thoughtsMessage">{task.message}</h4>
          <div className="likeContainer">
            <button
              className="likeBtn"
              // checked={task.isChecked}
              onClick={() => onLikesIncrease(task._id)}
              type="button">❤️
            </button>

          </div>
          <Moment className="howLongAgo" date={dateToFormat} />
          {/* <p>{formatRelative(task.date, new Date())}</p> */}
        </div>
      ))}
    </section>
  );
}

export default TaskList;