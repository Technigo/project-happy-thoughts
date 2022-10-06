/* eslint-disable no-use-before-define */
import React, { useState, useEffect } from 'react';
import TaskList from 'components/TaskList';
import TaskForm from 'components/TaskForm';
import './reset.css';
import './index';

export const App = () => {
  const [taskList, setTaskList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [newTodo, setNewTodo] = useState('');

  /* useEffect(() => { */
  /* console.log('test'); */
  /*   fetch('https://week7-backend.herokuapp.com/tasks')
      .then((data) => data.json())
      .then((transformedData) => setTaskList(transformedData))
      .catch((error) => console.error(error))
      .finally(() => console.log('everything is fine'));
  }, []); */

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

  /* useEffect(() => {
     window.alert(`the current counter is ${counter}`)
  }, [counter]) */

  const handleNewTodoChange = (event) => {
    setNewTodo(event.target.value)
  }
  const onLikes = (_id) => {
    fetch(`https://happy-thoughts-technigo.herokuapp.com/thoughts/${_id}/like`, {
      method: 'POST'
    })
      .then((res) => res.json())
      .then((data) => console.log(data))
      .finally(() => fetchTasks());
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
    fetch('https://happy-thoughts-technigo.herokuapp.com/thoughts', options)
      .then((res) => res.json())
      /* .then(() => fetchTasks()) */
      /* .finally(() => setNewTodo('')); */
      .then((updatedThought) => {
        setNewTodo((previousThoughts) => [updatedThought, ...previousThoughts])
      })
      .finally(() => {
        setNewTodo('')
        fetchTasks()
      })
  }

  return (
    <div className="outer-container">
      <div className="inner-container">
        <TaskForm
          newTodo={newTodo}
          onNewTodoChange={handleNewTodoChange}
          onFormSubmit={onFormSubmit} />
        <TaskList
          loading={loading}
          taskList={taskList}
          setTaskList={setTaskList}
          onLikes={onLikes} />
      </div>
    </div>
  )
}
/* return (
    <div>
      Find me src/app.js!
      {<><p>{counter}</p><button onClick={onCounterIncrease} type="button">
      counter increase
      </button></>
      {counter === 1 && (<TaskList list={taskList} />)}}
      <TaskList list={taskList} />
    </div>
  ); } */