import React, { useState, useEffect } from 'react';

import TaskList from 'components/TaskList';
import TaskForm from 'components/TaskForm';

const LIKES_URL = (thoughtId) => `https://happy-thoughts-technigo.herokuapp.com/thoughts/${thoughtId}/like`

export const App = () => {
  const [taskList, setTaskList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [newTodo, setNewTodo] = useState('');

  const fetchTasks = () => {
    setLoading(true);
    fetch('https://happy-thoughts-technigo.herokuapp.com/thoughts')
      .then((res) => res.json())
      .then((data) => setTaskList(data))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }

  // fetchData

  useEffect(() => {
    fetchTasks();
  }, []);

  const handleNewTodoChange = (event) => {
    setNewTodo(event.target.value);
  }
  // what daniel calls onNewTaskChange

  const onFormSubmit = (event) => {
    event.preventDefault();

    const options = {
      method: 'POST',
      // because of posting something
      headers: {
        'Content-Type': 'application/json'
      },
      // what are we sending, contenttype. 'application/json' because we are sending
      // json in the body (?!?!??!?!??!?!??!?!?!??!)
      body: JSON.stringify({
        message: newTodo
      })
      // sending what back end wants us to send
    }
    fetch('https://happy-thoughts-technigo.herokuapp.com/thoughts', options)
      .then((res) => res.json())
      .then(() => fetchTasks())
      .catch((error) => console.error(error))
      .finally(() => setNewTodo(''));
  }
  // what daniel calls handleFormSubmit

  const onLikesIncrease = (thoughtId) => {
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      }
    }

    fetch(LIKES_URL(thoughtId), options)
      .then((res) => res.json())
      .then((json) => {
        console.log(json)
      })
      .catch((error) => console.error(error))
      .finally(() => fetchTasks())
  }

  return (
    <div className="outerContainer">
      {/* <div className="taskFormContainer"> */}
      <TaskForm
        newTodo={newTodo}
        onNewTodoChange={handleNewTodoChange}
        onFormSubmit={onFormSubmit} />
      {/* </div>
      <div className="taskListContainer"> */}
      <TaskList
        loading={loading}
        taskList={taskList}
        setTaskList={setTaskList}
        onLikesIncrease={onLikesIncrease} />

      {/* </div> */}
    </div>
  )
}