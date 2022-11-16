/* eslint-disable linebreak-style */
import React, { useState, useEffect } from 'react';

import TaskForm from 'components/TaskForm';
import TaskList from 'components/TaskList';

export const App = () => {
  const [taskList, setTaskList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [newTodo, setNewTodo] = useState('');
  const [counter, setCounter] = useState(0);

  const fetchTasks = () => {
    setLoading(true);
    fetch('https://week7-backend.herokuapp.com/tasks')
      .then((res) => res.json())
      .then((data) => setTaskList(data))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }

  useEffect(() => {
    fetchTasks();
  }, []);

  /* if (loading) {
    return (
      <p>THE PAGE IS LOADING</p>
    )
  } */

  useEffect(() => {
    // window.alert(`the current counter is ${counter}`);
  }, [counter]);

  const handleCounterIncreaseButtonClick = () => {
    setCounter(counter + 1);
  }

  const handleNewTodoChange = (event) => {
    setNewTodo(event.target.value)
  }

  const onFormSubmit = (event) => {
    event.preventDefault();

    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        description: newTodo
      })
    }

    setLoading(true);
    fetch('https://week7-backend.herokuapp.com/tasks', options)
      .then((res) => res.json())
      .then(() => fetchTasks())
      .catch((error) => console.error(error))
      .finally(() => setNewTodo(''));
  }

  return (
    <div>
      <p>{counter}</p>
      <button
        onClick={handleCounterIncreaseButtonClick}
        type="button">counter increase
      </button>
      <TaskForm
        newTodo={newTodo}
        onNewTodoChange={handleNewTodoChange}
        onFormSubmit={onFormSubmit} />
      <TaskList
        loading={loading}
        taskList={taskList}
        setTaskList={setTaskList} />
    </div>
  );
}

