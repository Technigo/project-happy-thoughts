import React, { useState, useEffect } from 'react';

import TaskList from 'components/Tasklist'

export const App = () => {
  const [counter, setCounter] = useState(0);
  const [taskList, setTaskList] = useState([]);

  // useEffect with empty array [] call your functions on application start
  // dummy toDo API -> 'https://week7-backend.herokuapp.com/tasks'
  useEffect(() => {
    // creating promise
    fetch('https://week7-backend.herokuapp.com/tasks')
      .then((data) => data.json())
      .then((transformedData) => setTaskList(transformedData))
      .catch((error) => console.error(error))
      .finally(() => console.log('everything is fine'));
  }, []);

  // Will trigger first when app starts, and every time the variable in the dependency array changes

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
      <button onClick={handleCounterIncreaseButtonClick} type="button">Counter Increase</button>
      <TaskList list={taskList} />
    </div>
  );
}
