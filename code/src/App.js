import React, { useState, useEffect } from 'react';

import TaskList from 'components/TaskList';
import TaskForm from 'components/TaskForm';

export const App = () => {
  const [counter, setCounter] = useState(0);
  const [taskList, setTaskList] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [loading, setLoading] = useState(false);

  // useEffect with empty array [] call  your functions on application start
  // dummy todo API -> ' https://week7-backend.herokuapp.com/tasks'

  const fetchData = () => {
    setLoading(true);

    fetch('https://week7-backend.herokuapp.com/tasks')
      .then((data) => data.json())
      .then((transformedData) => setTaskList(transformedData.reverse()))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }

  useEffect(() => {
    fetchData();
  }, []);

  // will trigger first when app starts, and every time the variable in the dependency array changes

  useEffect(() => {
    // window.alert(`the current counter is ${counter}`);
  }, [counter]);

  const handleCounterIncreaseButtoncClick = () => {
    setCounter(counter + 1);
  }

  const onNewTaskChange = (event) => {
    setNewTask(event.target.value);
  }

  const handleFormCleanup = () => {
    setNewTask('');
    setLoading(false);
  }
  const handleFormSubmit = (event) => {
    event.preventDefault();

    const options = {
      method: 'POST',
      body: JSON.stringify({
        description: newTask
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    }
    setLoading(true);
    fetch('https://week7-backend.herokuapp.com/tasks', options)
      .then((data) => data.json())
      .then(() => fetchData())
      .catch((error) => console.error(error))
      .finally(() => handleFormCleanup());
  }
  if (loading) {
    <p>THE PAGE IS LOADING</p>
  }

  return (
    <div>
      <p>{counter}</p>
      <button onClick={handleCounterIncreaseButtoncClick} type="button">counter increase</button>
      <TaskForm
        handleFormSubmit={handleFormSubmit}
        onNewTaskChange={onNewTaskChange}
        newTask={newTask} />
      <TaskList list={taskList} />
    </div>
  );
}
