/* eslint-disable no-use-before-define */
import React, { useState, useEffect } from 'react';

import TaskList from 'components/TaskList';
import SubmitForm from 'components/SubmitForm';

export const App = () => {
  const [taskList, setTaskList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [newThought, setNewThought] = useState('');

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = () => {
    setLoading(true);
    fetch('https://happy-thoughts-technigo.herokuapp.com/thoughts')
      .then((res) => res.json())
      .then((data) => setTaskList(data))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }

  const handleNewThoughtChange = (event) => {
    setNewThought(event.target.value)
  }

  const onFormSubmit = (event) => {
    event.preventDefault();

    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        message: newThought
      })
    }

    fetch('https://happy-thoughts-technigo.herokuapp.com/thoughts', options)
      .then((res) => res.json())
      .then(() => fetchTasks())
      .finally(() => setNewThought(''));
  }

  return (
    <div>
      <SubmitForm
        newThought={newThought}
        onNewThoughtChange={handleNewThoughtChange}
        onFormSubmit={onFormSubmit} />
      <TaskList
        loading={loading}
        taskList={taskList}
        setTaskList={setTaskList} />
    </div>
  );
}