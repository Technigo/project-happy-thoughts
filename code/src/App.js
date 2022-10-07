import React, { useState, useEffect } from 'react';

import HappyThoughtsList from 'components/HappyThoughtsList';
import HappyThoughtsForm from 'components/HappyThoughtsForm';

export const App = () => {
  const [happyThoughtsList, setHappyThoughtsList] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [loading, setLoading] = useState(false);

  // useEffect with empty array [] call  your functions on application start
  // dummy todo API -> ' https://week7-backend.herokuapp.com/tasks'

  const fetchData = () => {
    setLoading(true);

    fetch('https://happy-thoughts-technigo.herokuapp.com/thoughts')
      .then((data) => data.json())
      .then((transformedData) => setHappyThoughtsList(transformedData.reverse()))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }

  useEffect(() => {
    fetchData();
  }, []);

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
        message: newTask
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    }
    setLoading(true);
    fetch('https://happy-thoughts-technigo.herokuapp.com/thoughts', options)
      .then((data) => data.json())
      .then((data) => {
        console.log(data)
        return data
      })
      .then(() => fetchData())
      .catch((error) => console.error(error))
      .finally(() => handleFormCleanup());
  }
  if (loading) {
    <p>THE PAGE IS LOADING</p>
  }

  return (
    <div>
      <HappyThoughtsForm
        handleFormSubmit={handleFormSubmit}
        onNewTaskChange={onNewTaskChange}
        newTask={newTask} />
      <HappyThoughtsList list={happyThoughtsList} />
    </div>
  );
}
