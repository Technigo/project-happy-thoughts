import React, { useState, useEffect } from 'react';

import TaskList from 'components/TaskList'

export const App = () => {
  const [counter, setCounter] = useState(0);
  const [taskList, setTaskList] = useState([]);

  useEffect(() => {
    fetch('https://week7-backend.herokuapp.com/tasks')
      .then((data) => data.json())
      .then((transformedData) => setTaskList(transformedData))
      .catch((error) => console.error(error))
      .finally(() => console.log('everything is fine'))
  }, []);

  useEffect(() => {
    // window.alert(`the current counter is ${counter}`);
  }, [counter]);

  const handleCounterIncreaseButtonClick = () => {
    setCounter(counter + 1);
  }

  return (
    <div>
      Find me in src/app.js!
      <p>{counter}</p>
      <button onClick={handleCounterIncreaseButtonClick} type="button">counter increase</button>
      <TaskList list={taskList} />
    </div>
  );
}
