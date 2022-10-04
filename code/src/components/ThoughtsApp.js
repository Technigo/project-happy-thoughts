/* eslint-disable indent */
/* eslint-disable import/no-named-as-default-member */
/* eslint-disable import/no-named-as-default */
/* eslint-disable no-tabs */
/* eslint-disable no-mixed-spaces-and-tabs */
import React, { useState, useEffect } from 'react';

import ThoughtsList from './ThoughtsList';
import ThoughtsForm from './ThoughtsForm';

export const ThoughtsApp = () => {
  const [thoughtsList, setThoughtsList] = useState([]);
  // const [loading, setLoading] = useState(false);
  const [newMessage, setNewMessage] = useState('');

  useEffect(() => {
    // eslint-disable-next-line no-use-before-define
    fetchThoughts();
  }, []);

  const fetchThoughts = () => {
    // setLoading(true);
    fetch('https://happy-thoughts-technigo.herokuapp.com/thoughts')
      // eslint-disable-next-line arrow-parens
      .then(res => res.json())
      .then((data) => setThoughtsList(data))
      .catch((error) => console.error(error))
      // .finally(() => setLoading(false));
  }

  const handleNewMessageChange = (event) => {
		    setNewMessage(event.target.value)
		  }

		  const onFormSubmit = (event) => {
		    event.preventDefault();

		    const options = {
		      method: 'POST',
		      headers: {
		        'Content-Type': 'application/json'
		      },
		      body: JSON.stringify({
		        thoughts: newMessage
		      })
		    }

		    fetch('https://happy-thoughts-technigo.herokuapp.com/thoughts', options)
		      // eslint-disable-next-line arrow-parens
		      .then(res => res.json())
		      .then(() => fetchThoughts())
		      .finally(() => setNewMessage(''));
		  }

  return (
    <div>
			  <ThoughtsForm
  newTodo={newMessage}
  onNewTodoChange={handleNewMessageChange}
  onFormSubmit={onFormSubmit} />
      <ThoughtsList
        // loading={loading}
        thoughtsList={thoughtsList}
        setThoughtsList={setThoughtsList} />
    </div>
  );
};

// import React, { useState, useEffect } from 'react';

// import TaskList from 'components/TaskList';
// import TaskForm from 'components/TaskForm';

// export const App = () => {
//   const [taskList, setTaskList] = useState([]);
//   const [loading, setLoading] = useState(false);
//   // const [newTodo, setNewTodo] = useState('');

//   useEffect(() => {
//     // eslint-disable-next-line no-use-before-define
//     fetchTasks();
//   }, []);

//   const fetchTasks = () => {
//     setLoading(true);
//     fetch('https://week7-backend.herokuapp.com/tasks')
//       .then((res) => res.json())
//       .then((data) => setTaskList(data))
//       .catch((error) => console.error(error))
//       .finally(() => setLoading(false));
//   }

//   const handleNewTodoChange = (event) => {
//     setNewTodo(event.target.value)
//   }

//   const onFormSubmit = (event) => {
//     event.preventDefault();

//     const options = {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify({
//         description: newTodo
//       })
//     }

//     fetch('https://week7-backend.herokuapp.com/tasks', options)
//       .then((res) => res.json())
//       .then(() => fetchTasks())
//       .finally(() => setNewTodo(''));
//   }

//   return (
//     <div>
//       <TaskForm
//         newTodo={newTodo}
//         onNewTodoChange={handleNewTodoChange}
//         onFormSubmit={onFormSubmit} />
//       <TaskList
//         loading={loading}
//         taskList={taskList}
//         setTaskList={setTaskList} />
//     </div>
//   );
// }