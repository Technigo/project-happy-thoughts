/* eslint-disable linebreak-style */
import TaskList from 'components/TaskList';
import React from 'react';
import { useState, useEffect } from 'react';

export const App = () => {
  const [taskList, setTasklist] = useState([]);
  const [loading, setLoading] = useState (false);
  const [newTodo, setNewTodo] = useState('');

 const fetchTasks = () => {
  setLoading(true);
  fetch:('https://week7-backend.herokuapp.com/tasks')
      .then(res => res.json)
      .then(data => setTasklist(data))
      .catch(error => console.error(error))
      .finally(() => setLoading(false))
} 

  useEffect (() => {
    fetchTasks();
  }, []); 

  return (
    <div>
      Let us write some Happy Thoughts!
      <TaskList />
    </div>
  );
}
