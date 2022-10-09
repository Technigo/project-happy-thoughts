import React, { useState, useEffect } from 'react';

import TaskList from 'components/TaskList';
import TaskForm from 'components/TaskForm';

export const App = () => {
  const [taskList, setTaskList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [newTodo, setNewTodo] = useState('');
  // from taskform

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
    setNewTodo(event.target.value)
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
      .finally(() => setNewTodo(''));
  }
  // what daniel calls handleFormSubmit

  return (
    <div className="outerContainer">
      <TaskForm
        newTodo={newTodo}
        onNewTodoChange={handleNewTodoChange}
        onFormSubmit={onFormSubmit} />
      <TaskList
        loading={loading}
        taskList={taskList}
        setTaskList={setTaskList} />
    </div>
  )
}
