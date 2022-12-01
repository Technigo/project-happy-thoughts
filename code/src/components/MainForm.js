import React, { useState, useEffect } from 'react';

import ThoughtList from './ThoughtList'; // eslint-disable-line
import ThoughtForm from './ThoughtForm';
import { HAPPY_URL, LIKES_URL } from './Urls';

/* MainForm component, where all the other components are imported to be printed */

const MainForm = () => {
  const [taskList, setTaskList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [newTodo, setNewTodo] = useState('');

  useEffect(() => {
    fetchTasks(); // eslint-disable-line
  }, []);

  const fetchTasks = () => {
    setLoading(true);
    fetch(HAPPY_URL)
      .then((res) => res.json())
      .then((data) => setTaskList(data))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
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
        message: newTodo
      })
    }

    fetch(HAPPY_URL, options)
      .then((res) => res.json())
      .then(() => fetchTasks())
      .catch((error) => console.error(error))
      .finally(() => setNewTodo(''));
  }

  /* Here we target the LIKE_URLs id, to print (like) the right thought. */
  const handleLikesIncrease = (id) => {
    const options = {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      }
    };
    fetch(LIKES_URL(id), options)
      .then((res) => res.json())
      .then(() => fetchTasks())
      .catch((err) => console.error(err));
  }

  return (
    <div className="outer-container">
      <div className="inner-container">
        <ThoughtForm
          newTodo={newTodo}
          onNewTodoChange={handleNewTodoChange}
          onFormSubmit={onFormSubmit} />
        <ThoughtList
          loading={loading}
          taskList={taskList}
          handleLikesIncrease={handleLikesIncrease} />
      </div>
    </div>
  );
}

export default MainForm;