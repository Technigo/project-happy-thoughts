/* eslint-disable max-len */
/* eslint-disable no-mixed-spaces-and-tabs */
/* eslint no-underscore-dangle: 0 */
/* eslint-disable no-tabs */
// import { formatRelative } from 'date-fns';

import React from 'react';

const ThoughtsList = ({ thoughtsList, setThoughtsList }) => {
	return(
		
	)
  //  const onThoughtsCheckChange = (thoughts) => {
  //     setThoughtsList(thoughtsList => thoughtsList.map(singleThoughts => {
  //         if(singleThoughts._id === thoughts._id) {
  //             return {...singleThoughts, isChecked: !singleThoughts.isChecked};
  //         }
  //         return singleThoughts;
  //     }));
  // }
  // return (
  //     <section>
  //         {thoughtsList.reverse().map(thoughts => (
  //             <div key={thoughts._id}>
  //                 <h4>{thoughts.thoughts}</h4>

  //                 <input onChange={() => onThoughtsCheckChange(thoughts)} type="checkbox" checked={thoughts.isChecked} />
  //                 <p>{formatRelative(thoughts.date, new Date())}</p>
  //             </div>
  //         ))}
  //     </section>
  // );
}

export default ThoughtsList;

// /* eslint no-underscore-dangle: 0 */
// import React from 'react';
// import { formatRelative } from 'date-fns';

// const TaskList = ({ loading, taskList, setTaskList }) => {

//     if (loading) {
//         return <h1>Loading in progress...</h1>
//     }
//     const onTaskCheckChange = (task) => {
//         setTaskList(taskList => taskList.map(singleTask => {
//             if(singleTask._id === task._id) {
//                 return {...singleTask, isChecked: !singleTask.isChecked};
//             }
//             return singleTask;
//         }));
//     }
//     return (
//         <section>
//             {taskList.reverse().map(task => (
//                 <div key={task._id}>
//                     <h4>{task.description}</h4>
// eslint-disable-next-line max-len
//                     <input onChange={() => onTaskCheckChange(task)} type="checkbox" checked={task.isChecked} />
//                     <p>{formatRelative(task.date, new Date())}</p>
//                 </div>
//             ))}
//         </section>
//     );
// }

// export default TaskList;
// const MessageList = () => {
//   return (
//     <div>
//       <ul>
//         {MessageList.map(message =>)
//         <li key = {message.list}>
//             <button onClick ={() => setMessageList(message)>
//             {message.list}</button>
//         </li>
//     ))}

//       </ul>
//       {MessageList && < MessageList />}
//     </div>
//   );
// };

// export default MessageList;